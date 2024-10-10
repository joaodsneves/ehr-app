import React, { useState } from 'react';
import axios from 'axios';

const AddPaciente = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/pacientes', {
      nome,
      idade: parseInt(idade),
      endereco
    })
      .then(response => {
        alert('Paciente adicionado com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao adicionar paciente:', error);
      });
  };

  return (
    <div>
      <h2>Adicionar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>Idade:</label>
          <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>
        <div>
          <label>Endereço:</label>
          <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddPaciente;
