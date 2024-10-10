import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Estado para armazenar os pacientes
  const [pacientes, setPacientes] = useState([]);

  // Função para buscar pacientes do backend
  const fetchPacientes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/pacientes');
      setPacientes(response.data);
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
    }
  };

  // useEffect para buscar os pacientes ao carregar o componente
  useEffect(() => {
    fetchPacientes();
  }, []);

  return (
    <div className="App">
      <h1>Pacientes</h1>
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>
            {paciente.nome} - {paciente.idade} anos - {paciente.endereco}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
