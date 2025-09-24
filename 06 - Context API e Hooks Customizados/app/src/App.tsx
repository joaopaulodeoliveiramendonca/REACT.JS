import React, { createContext, useState, useContext } from 'react';

// Criando o Contexto para o Tema
const TemaContext = createContext<any>(null);

// Hook customizado para acessar e modificar o tema
function useTema() {
  return useContext(TemaContext);
}

// Provider que encapsula a lógica de gerenciamento de tema
function TemaProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState('escuro');
  
  const mudarTema = () => {
    setTema(tema === 'escuro' ? 'claro' : 'escuro');
  };

  return (
    <TemaContext.Provider value={{ tema, mudarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

// Componente que consome o contexto de Tema
function Componente() {
  const { tema, mudarTema } = useTema();
  
  return (
    <div
      style={{
        background: tema === 'escuro' ? '#333' : '#fff',
        color: tema === 'escuro' ? '#fff' : '#000',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h1>O tema atual é {tema}</h1>
      <button onClick={mudarTema}>Mudar Tema</button>
    </div>
  );
}

// Componente para contar o número de cliques
function Contador() {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => {
    setContagem(contagem + 1);
  };

  return (
    <div>
      <p>Contagem de cliques: {contagem}</p>
      <button onClick={incrementar}>Clique</button>
    </div>
  );
}

// Componente principal App que utiliza o TemaProvider
function App() {
  return (
    <TemaProvider>
      <h1>Exemplo de Context API e Hooks Customizados</h1>

      {/* Componente de Tema */}
      <Componente />

      <h2>Componente de Contador</h2>
      {/* Componente de Contador */}
      <Contador />
    </TemaProvider>
  );
}

export default App;