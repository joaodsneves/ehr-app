import React from 'react';
import PacienteList from './PacienteList';
import AddPaciente from './AddPaciente';

function App() {
  return (
    <div>
      <h1>Sistema de Gestão de Pacientes</h1>
      <AddPaciente />
      <PacienteList />
    </div>
  );
}

export default App;
