import React, { useState } from 'react';

// Componente Saudacao com Props
function Saudacao(props: { nome: string }) {
  return <h1>Olá, {props.nome}!</h1>;
}

// Componente de Renderização Condicional
function RenderizacaoCondicional() {
  const usuarioAutenticado = true;
  return (
    <h1>{usuarioAutenticado ? "Bem-vindo!" : "Faça login"}</h1>
  );
}

// Componente ListaDeTarefas com Listas e Keys
function ListaDeTarefas(props: { tarefas: string[] }) {
  return (
    <ul>
      {props.tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
  );
}

// Componente principal App que utiliza todos os conceitos
function App() {
  const tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercício'];

  return (
    <div>
      {/* Componente Saudacao */}
      <Saudacao nome="João" />

      {/* Componente RenderizacaoCondicional */}
      <RenderizacaoCondicional />

      {/* Componente ListaDeTarefas */}
      <ListaDeTarefas tarefas={tarefas} />
    </div>
  );
}

export default App;
