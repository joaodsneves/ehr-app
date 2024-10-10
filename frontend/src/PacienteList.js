import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PacienteList = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/pacientes')
      .then(response => {
        setPacientes(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar pacientes:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Pacientes</h2>
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>
            {paciente.nome} - {paciente.idade} anos - {paciente.endereco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PacienteList;
