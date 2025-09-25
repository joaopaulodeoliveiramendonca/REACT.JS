
# Performance e Otimização

## React.memo()

O React.memo() é uma função que envolve um componente e evita que ele seja re-renderizado, a menos que suas props tenham mudado. Ele é útil quando você tem componentes que não precisam ser atualizados a menos que seus dados de entrada mudem.

### Exemplo:

```jsx
import React, { useState } from 'react';

const Item = React.memo(({ nome }) => {
  console.log('Renderizando item:', nome);
  return <p>{nome}</p>;
});

function App() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <Item nome="Item A" />
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <p>Contador: {contador}</p>
    </div>
  );
}

export default App;
```

No exemplo acima, o componente `Item` só será re-renderizado quando a prop `nome` mudar. O botão de incremento só atualiza o contador e não causa re-renderização do componente `Item`.

## useMemo()

O `useMemo()` é um hook que memoriza o valor de uma expressão ou cálculo caro para que ele não seja recalculado em cada renderização. Ele só recalcula o valor quando as dependências (passadas como segundo argumento) mudam.

### Exemplo:

```jsx
import React, { useState, useMemo } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const calcularNumero = useMemo(() => {
    console.log('Calculando número...');
    return contador * 2;
  }, [contador]); // Só recalcula quando o contador mudar
  
  return (
    <div>
      <p>Número calculado: {calcularNumero}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default App;
```

O cálculo de `calcularNumero` só será realizado quando o `contador` mudar, evitando recalcular em cada renderização.

## useCallback()

O `useCallback()` é semelhante ao `useMemo()`, mas é usado para memorizar funções. Ele ajuda a evitar que funções sejam recriadas em cada renderização, o que é útil quando a função é passada como prop para componentes filhos.

### Exemplo:

```jsx
import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('Child re-renderizado');
  return <button onClick={onClick}>Clique-me</button>;
});

function App() {
  const [contador, setContador] = useState(0);
  const incrementar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]); // Memoriza a função, e ela só é recriada quando o contador mudar

  return (
    <div>
      <Child onClick={incrementar} />
      <p>Contador: {contador}</p>
    </div>
  );
}

export default App;
```

`useCallback()` evita que a função `incrementar` seja recriada a cada renderização do `App`, o que ajuda a melhorar a performance, especialmente quando a função é passada para componentes filhos.

## Lazy Loading e Suspense

Lazy Loading permite carregar componentes apenas quando eles são necessários, o que melhora o desempenho inicial da aplicação. Isso pode ser feito com a função `React.lazy()` e o componente `Suspense`.

### Exemplo:

```jsx
import React, { Suspense, lazy } from 'react';

// Componente carregado dinamicamente
const ComponenteCarregado = lazy(() => import('./ComponenteCarregado'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Carregando...</div>}>
        <ComponenteCarregado />
      </Suspense>
    </div>
  );
}

export default App;
```

`React.lazy()` carrega o componente `ComponenteCarregado` somente quando ele for necessário. `Suspense` exibe um componente de fallback (neste caso, "Carregando...") enquanto o componente está sendo carregado.

## Exercício: Otimizando uma Lista de Itens

Crie uma lista de itens onde cada item só será re-renderizado quando suas props mudarem, utilizando `React.memo()`. Em seguida, implemente `useMemo()` para evitar cálculos desnecessários e `useCallback()` para otimizar as funções passadas para os filhos.
