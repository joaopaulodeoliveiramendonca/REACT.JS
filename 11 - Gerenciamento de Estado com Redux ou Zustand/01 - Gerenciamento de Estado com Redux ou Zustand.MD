
# Gerenciamento de Estado com Redux ou Zustand

## Introdução ao Redux

O Redux é uma biblioteca de gerenciamento de estado que permite manter o estado de sua aplicação centralizado e acessível de qualquer parte do seu aplicativo, independentemente da estrutura de componentes. Ele é baseado no conceito de fluxo unidirecional de dados, o que significa que o estado pode ser alterado apenas por ações e reducers.

## Instalação do Redux

Para começar, instale o Redux e o React-Redux (conector entre o React e o Redux):

```bash
npm install redux react-redux
```

## Conceitos do Redux

- **Store**: Armazena o estado da aplicação.
- **Action**: Um objeto que descreve o que aconteceu (uma ação).
- **Reducer**: Uma função que especifica como o estado da aplicação muda em resposta a uma ação.

## Exemplo Básico de Redux

### Criando a Store

Primeiro, você cria a store com o `createStore`:

```jsx
import { createStore } from 'redux';

// Definir o estado inicial
const initialState = {
  contador: 0,
};

// Definir um reducer
function contadorReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return { ...state, contador: state.contador + 1 };
    case 'DECREMENTAR':
      return { ...state, contador: state.contador - 1 };
    default:
      return state;
  }
}

// Criar a store
const store = createStore(contadorReducer);
```

O reducer é responsável por atualizar o estado com base nas ações.

### Conectando o Redux ao React

No React, você usa o `Provider` do react-redux para tornar a store acessível para todos os componentes. Depois, você usa o `useSelector` para acessar o estado e `useDispatch` para despachar ações.

```jsx
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';

function Contador() {
  const dispatch = useDispatch();
  const contador = useSelector((state) => state.contador);
  
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>Decrementar</button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Contador />
    </Provider>
  );
}
```

- `useDispatch()` permite despachar ações.
- `useSelector()` permite acessar o estado da store.

## Alternativa: Zustand

O Zustand é uma alternativa mais simples e moderna ao Redux. Ele também permite gerenciar o estado da aplicação globalmente, mas é mais fácil de configurar e usar.

### Instale o Zustand:

```bash
npm install zustand
```

## Exemplo Básico com Zustand

### Criando o Store

No Zustand, você cria um store diretamente com o `create`:

```jsx
import create from 'zustand';

const useStore = create((set) => ({
  contador: 0,
  incrementar: () => set((state) => ({ contador: state.contador + 1 })),
  decrementar: () => set((state) => ({ contador: state.contador - 1 })),
}));
```

O `create()` define o store e as ações de manipulação do estado.

### Usando o Store no Componente

Para acessar e modificar o estado no React:

```jsx
import React from 'react';
import { useStore } from './store';

function Contador() {
  const { contador, incrementar, decrementar } = useStore();
  
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;
```

`useStore()` acessa diretamente o estado e as funções de alteração definidas no store.

## Exercício: Criando um Contador Global com Redux ou Zustand

Crie um contador global usando Redux ou Zustand. O contador deve ser acessado e modificado por diferentes componentes na aplicação, sem a necessidade de passar o estado por props.
