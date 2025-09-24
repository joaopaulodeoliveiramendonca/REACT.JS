import React from 'react';

function App() {
  return (
    <div>
      <h1>Olá, React!</h1>
      <Saudacao nome="João" />
    </div>
  );
}

function Saudacao(props) {
  return <h2>Olá, {props.nome}!</h2>;
}

export default App;
