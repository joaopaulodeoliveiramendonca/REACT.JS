
# Efeitos Colaterais com useEffect

## O que é o useEffect?
O `useEffect` é um hook que permite executar efeitos colaterais em componentes funcionais. Ele substitui os métodos de ciclo de vida de componentes de classe, como `componentDidMount`, `componentDidUpdate`, e `componentWillUnmount`.
Os efeitos colaterais podem ser:
- Chamadas de API
- Manipulação de eventos
- Atualizações de título de página
- Efeitos de animação

## Sintaxe Básica do useEffect
A sintaxe básica do `useEffect` é:
```javascript
useEffect(() => {
  // Código do efeito colateral
}, [dependencias]);
```
- O primeiro argumento é uma função que contém o efeito colateral.
- O segundo argumento é um array de dependências. O efeito será executado sempre que qualquer valor dentro deste array mudar. Se o array for vazio (`[]`), o efeito será executado apenas uma vez, após a renderização inicial.

## Exemplo de useEffect para chamadas de API
Um exemplo comum é fazer chamadas de API dentro do `useEffect` para buscar dados quando o componente é montado. Vamos simular a busca de dados de um usuário de uma API fictícia:

```javascript
import React, { useState, useEffect } from 'react';

function Usuario() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/usuario')
      .then((response) => response.json())
      .then((data) => setUsuario(data))
      .catch((error) => console.error('Erro ao buscar usuário:', error));
  }, []); // O array vazio significa que o efeito só será executado uma vez, após a montagem

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

export default Usuario;
```

- O `useEffect` aqui busca os dados de um usuário de uma API assim que o componente é montado.
- O array vazio `[]` garante que a chamada de API aconteça apenas uma vez.

## Atualizando o título da página com useEffect
Você também pode usar o `useEffect` para efeitos simples, como atualizar o título da página com base no estado do componente.

```javascript
import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]); // O efeito será executado toda vez que o contador mudar

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

- A cada atualização do estado `contador`, o título da página é alterado.

## Limpeza de Efeitos (Clean-up)
Em alguns casos, você pode precisar limpar os efeitos, como cancelar uma requisição de API ou remover um listener de eventos quando o componente é desmontado.
Isso pode ser feito retornando uma função de limpeza dentro do `useEffect`:

```javascript
import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prev) => prev + 1);
    }, 1000);

    // Função de limpeza (limpa o intervalo quando o componente é desmontado)
    return () => clearInterval(interval);
  }, []); // O intervalo é configurado apenas uma vez

  return <p>Contador: {contador}</p>;
}

export default Contador;
```

- A função de limpeza (no retorno do `useEffect`) é chamada quando o componente é desmontado ou antes do efeito ser reexecutado. Neste caso, a função `clearInterval` limpa o intervalo configurado.

## Exercício: Criando um Componente de Contagem Regressiva
Crie um componente que mostre uma contagem regressiva a partir de 10 segundos. Use o `useEffect` para diminuir o valor a cada segundo, e garanta que, ao chegar a zero, o contador pare.
