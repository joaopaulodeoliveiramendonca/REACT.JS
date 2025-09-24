import React, { useState, useEffect } from 'react';

// Componente de Contador com useEffect para Atualização de Título
function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Atualizando o título da página sempre que o contador mudar
    document.title = `Contador: ${contador}`;
  }, [contador]); // O efeito será executado toda vez que o contador mudar

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

// Componente de Usuário com useEffect para chamadas de API
function Usuario() {
  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    // Fazendo uma chamada à API fictícia para buscar dados de um usuário
    fetch('https://api.example.com/usuario')
      .then((response) => response.json())
      .then((data) => setUsuario(data))
      .catch((error) => console.error('Erro ao buscar usuário:', error));
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez

  if (!usuario) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Nome: {usuario.nome}</h1>
      <p>Email: {usuario.email}</p>
    </div>
  );
}

// Componente de Contador com Intervalo e Limpeza de Efeito
function ContadorComIntervalo() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Definindo um intervalo para aumentar o contador a cada segundo
    const interval = setInterval(() => {
      setContador((prev) => prev + 1);
    }, 1000);

    // Função de limpeza para limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []); // O intervalo é configurado apenas uma vez

  return <p>Contador com Intervalo: {contador}</p>;
}

// Componente de Contagem Regressiva
function ContagemRegressiva() {
  const [contador, setContador] = useState(10);

  useEffect(() => {
    if (contador > 0) {
      // Diminuindo o valor do contador a cada segundo
      const interval = setInterval(() => {
        setContador((prev) => prev - 1);
      }, 1000);

      // Limpeza do intervalo quando o componente for desmontado ou o contador atingir 0
      return () => clearInterval(interval);
    }
  }, [contador]); // O efeito é reexecutado sempre que o contador mudar

  return <p>Contagem Regressiva: {contador}</p>;
}

// Componente principal App que utiliza todos os conceitos
function App() {
  return (
    <div>
      <h1>Exemplo de Efeitos Colaterais com useEffect</h1>

      {/* Componente Contador com Atualização de Título */}
      <Contador />

      {/* Componente Usuario para chamada de API */}
      <Usuario />

      {/* Componente Contador com Intervalo */}
      <ContadorComIntervalo />

      {/* Componente Contagem Regressiva */}
      <ContagemRegressiva />
    </div>
  );
}

export default App;