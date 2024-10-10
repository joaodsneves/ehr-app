const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Configurações do banco de dados
const sequelize = new Sequelize('ehr', 'root', 'rootpassword', {
  host: 'db',
  dialect: 'mysql'
});

// Definição do modelo Paciente
const Paciente = sequelize.define('Paciente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sincroniza o modelo com o banco de dados
sequelize.sync();

// Configuração do Express
const app = express();
app.use(express.json());

// Rotas para o CRUD
app.post('/pacientes', async (req, res) => {
  const paciente = await Paciente.create(req.body);
  res.json(paciente);
});

app.get('/pacientes', async (req, res) => {
  const pacientes = await Paciente.findAll();
  res.json(pacientes);
});

app.put('/pacientes/:id', async (req, res) => {
  const paciente = await Paciente.findByPk(req.params.id);
  paciente.update(req.body);
  res.json(paciente);
});

app.delete('/pacientes/:id', async (req, res) => {
  const paciente = await Paciente.findByPk(req.params.id);
  paciente.destroy();
  res.json({ message: 'Paciente deletado' });
});

app.listen(5000, () => {
  console.log('Servidor backend rodando na porta 5000');
});

// Adicionando rota para obter um paciente por ID
app.get('/pacientes/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ message: 'Paciente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar paciente', error: error.message });
  }
});