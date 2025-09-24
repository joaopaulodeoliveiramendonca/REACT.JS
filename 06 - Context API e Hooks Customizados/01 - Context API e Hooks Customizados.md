
# Context API e Hooks Customizados

## Introdução ao Context API
A Context API do React permite compartilhar dados entre componentes sem precisar passar props manualmente em cada nível da árvore de componentes. Isso é útil quando você precisa compartilhar um estado global (como temas, dados de usuário, ou configurações) em vários componentes.

## Como Criar um Contexto
Criar um Contexto: O primeiro passo é criar o contexto com `React.createContext()`. O contexto pode ser acessado por qualquer componente que o "consuma".

Exemplo:
```javascript
import React, { createContext, useState, useContext } from 'react';

// Criação do Contexto
const TemaContext = createContext();

function TemaProvider({ children }) {
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

function Componente() {
  const { tema, mudarTema } = useContext(TemaContext);
  return (
    <div style={{ background: tema === 'escuro' ? '#333' : '#fff', color: tema === 'escuro' ? '#fff' : '#000' }}>
      <h1>O tema atual é {tema}</h1>
      <button onClick={mudarTema}>Mudar Tema</button>
    </div>
  );
}

function App() {
  return (
    <TemaProvider>
      <Componente />
    </TemaProvider>
  );
}

export default App;
```

- `createContext()` cria o contexto.
- `TemaContext.Provider` envolve os componentes que precisam acessar o contexto e fornece o valor a ser compartilhado.
- `useContext(TemaContext)` é usado para acessar o valor do contexto dentro de um componente.

## Hooks Customizados
Os hooks customizados permitem que você crie suas próprias funções reutilizáveis que encapsulam a lógica do React. Isso ajuda a manter o código mais limpo e modular.

Exemplo de hook customizado para contar o número de cliques:
```javascript
import { useState } from 'react';

// Hook customizado para contar cliques
function useContador() {
  const [contagem, setContagem] = useState(0);
  const incrementar = () => setContagem(contagem + 1);
  return [contagem, incrementar];
}

function App() {
  const [contagem, incrementar] = useContador();
  return (
    <div>
      <p>Contagem: {contagem}</p>
      <button onClick={incrementar}>Clique</button>
    </div>
  );
}

export default App;
```

- `useContador` é um hook customizado que encapsula a lógica de contagem.
- Ele retorna o estado `contagem` e a função `incrementar`, que pode ser usada em qualquer componente.

## Exercício: Criando um Tema Global com Context API e Hook Customizado
Crie uma aplicação onde você gerencia o tema (claro ou escuro) com a Context API. O estado do tema deve ser controlado por um hook customizado e acessado por diferentes componentes da aplicação.
