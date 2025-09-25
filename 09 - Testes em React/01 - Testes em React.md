
# Testes em React

## Introdução aos Testes em React

Testar componentes no React é fundamental para garantir que sua aplicação se comporte conforme esperado, além de permitir que você faça mudanças no código com mais confiança. A biblioteca Jest é comumente usada para testes em projetos React, e o React Testing Library ajuda a testar a renderização e interações dos componentes.

## Instalação das Bibliotecas

Para começar a testar, você precisa instalar as dependências:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

## Escrevendo o Primeiro Teste com React Testing Library

Um teste básico verifica se um componente renderiza corretamente. Vamos testar o componente `App`:

### Componente App.js:

```jsx
import React from 'react'; 

function App() { 
  return <h1>Olá, React!</h1>; 
}

export default App;
```

### Teste para o App:

```jsx
import React from 'react'; 
import { render, screen } from '@testing-library/react'; 
import App from './App';

test('verifica se o texto "Olá, React!" é exibido', () => { 
  render(<App />); 
  const linkElement = screen.getByText(/Olá, React!/i); 
  expect(linkElement).toBeInTheDocument(); 
});
```

- `render()` renderiza o componente no ambiente de teste.
- `screen.getByText()` localiza um elemento pelo texto.
- `expect()` verifica se o elemento está presente no documento.

## Testando Interações com o Usuário

Além de verificar se o componente foi renderizado corretamente, você também pode testar interações, como cliques em botões ou preenchimento de formulários.

### Exemplo de teste para um componente de contador:

#### Componente Contador.js:

```jsx
import React, { useState } from 'react'; 

function Contador() { 
  const [contador, setContador] = useState(0); 
  return ( 
    <div> 
      <p>Contador: {contador}</p> 
      <button onClick={() => setContador(contador + 1)}>Incrementar</button> 
    </div> 
  ); 
}

export default Contador;
```

#### Teste para o Contador:

```jsx
import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react'; 
import Contador from './Contador'; 

test('verifica se o contador incrementa ao clicar no botão', () => { 
  render(<Contador />); 
  const button = screen.getByText(/Incrementar/i); 
  fireEvent.click(button); 
  const counter = screen.getByText(/Contador: 1/i); 
  expect(counter).toBeInTheDocument(); 
});
```

- `fireEvent.click()` simula o clique no botão.
- `screen.getByText()` verifica se o texto atualizado aparece após o clique.

## Testando Comportamento Assíncrono

Quando você precisa testar comportamentos assíncronos (como chamadas de API), você pode usar `findBy` em vez de `getBy`, já que o `findBy` espera até o elemento aparecer.

### Exemplo de teste para uma requisição assíncrona de usuário:

#### Componente Usuario.js:

```jsx
import React, { useEffect, useState } from 'react'; 

function Usuario() { 
  const [usuario, setUsuario] = useState(null); 
  useEffect(() => { 
    fetch('https://api.example.com/usuario') 
      .then((response) => response.json()) 
      .then((data) => setUsuario(data)); 
  }, []); 
  if (!usuario) { 
    return <p>Carregando...</p>; 
  } 
  return <h1>Nome: {usuario.nome}</h1>; 
}

export default Usuario;
```

#### Teste para o componente Usuario:

```jsx
import React from 'react'; 
import { render, screen, waitFor } from '@testing-library/react'; 
import Usuario from './Usuario'; 

test('verifica se o nome do usuário é exibido após a requisição', async () => { 
  render(<Usuario />); 
  await waitFor(() => screen.getByText(/Nome:/i)); 
  const nomeElement = screen.getByText(/Nome:/i); 
  expect(nomeElement).toBeInTheDocument(); 
});
```

- `waitFor()` espera até o elemento ser atualizado após a execução assíncrona (como uma chamada de API).

## Exercício: Escrevendo Testes para um Componente de Formulário

Crie um componente de formulário com validação simples e escreva testes para verificar se os campos são validados corretamente e se os dados são enviados com sucesso. Utilize os métodos de interação como `fireEvent.change()` e `fireEvent.submit()` para simular o preenchimento e envio do formulário.
