# Fundamentos de React JS (Básico)

## Introdução ao React e Configuração do Ambiente

### O que é o React?
O React é uma biblioteca JavaScript para construir interfaces de usuário, especialmente voltadas para aplicações web de página única SPAs (Single-Page Application ou Aplicação de Página Única). Ele permite criar componentes reutilizáveis que atualizam de forma eficiente a interface ao interagir com dados dinâmicos.

### Como instalar e configurar o React
Existem várias maneiras de iniciar um projeto React. O mais comum é usar o Create React App ou Vite, que configuram automaticamente o ambiente de desenvolvimento.

### NPX (Node Package eXecute)
NPX (Node Package eXecute) é uma ferramenta que vem com o npm e permite executar pacotes do Node.js sem precisar instalá-los permanentemente no seu sistema. Ele funciona como um executor de comandos, verificando primeiro a instalação local de um pacote ou baixando-o temporariamente do registro do npm para executá-lo, o que é útil para testar ferramentas, criar projetos ou executar comandos de pacote pontuais sem poluir o ambiente de desenvolvimento.

#### Usando Create React App:
1. Abra o terminal e execute:
    ```bash
    npx create-react-app nome-do-projeto
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd nome-do-projeto
    ```
3. Para rodar o projeto:
    ```bash
    npm start
    ```

#### Usando Vite:
1. Crie o projeto com o Vite:
    ```bash
    npm create vite@latest nome-do-projeto --template react
    ```
2. Navegue até o diretório do projeto e instale as dependências:
    ```bash
    cd nome-do-projeto
    npm install
    ```
3. Para rodar o projeto:
    ```bash
    npm run dev
    ```

### Estrutura básica de uma aplicação React
Após a criação do projeto, você verá a estrutura de diretórios como:

```
public/
  index.html
src/
  App.js
  index.js
  styles.css
```

- `public/index.html`: O arquivo HTML base onde o React será montado.
- `src/index.js`: O ponto de entrada do JavaScript, onde o React renderiza a aplicação no HTML.
- `src/App.js`: O componente principal, onde você começa a construir a interface do usuário.

### JSX: Sintaxe de JavaScript com HTML
O React usa JSX (JavaScript XML), uma sintaxe que mistura JavaScript e HTML. Com JSX, você pode escrever componentes de forma mais declarativa.

Exemplo:
```javascript
import React from 'react';

function App() {
  return (
    <div>
      <h1>Olá, React!</h1>
    </div>
  );
}

export default App;
```
JSX permite escrever HTML dentro de funções JavaScript, mas é importante lembrar que ele precisa ser compilado, por isso o React usa ferramentas como Babel.

### Primeiros componentes funcionais
No React, os componentes são as peças fundamentais. Eles podem ser funcionais ou de classe, mas os componentes funcionais são mais comuns e eficientes com os hooks (funções especiais no React).

Exemplo de componente funcional:
```javascript
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
```
Neste exemplo, o componente `Saudacao` recebe um prop chamado `nome` e o exibe dentro de um `<h2>`.
