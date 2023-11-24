// components/Usuarios.js
import React, { useState, useEffect } from 'react';

import "./Usuarios.scss"

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/pacientess/db.json');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
    <div className='container-usuarios'><h1>PACIENTES </h1></div>
      
      <table className='lista-pacientes'>
        <thead>
          <tr>
            <th className='titulo-paciente-tabela'>ID</th>
            <th className='titulo-paciente-tabela'>Nome</th>
            <th className='titulo-paciente-tabela'>CPF</th>
            <th className='titulo-paciente-tabela'>Plano de Saude</th>
            <th className='titulo-paciente-tabela'>Data de Aniversário</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td className='resultado-paciente-tabela'>{usuario.id}</td>
              <td className='resultado-paciente-tabela' >{usuario.nome}</td>
              <td className='resultado-paciente-tabela'>{usuario.cpf}</td>
              <td className='resultado-paciente-tabela'>{usuario.planodesaude}</td>
              <td className='resultado-paciente-tabela'>{usuario.dataaniversario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;
