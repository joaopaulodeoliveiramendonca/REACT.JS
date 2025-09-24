
# React Router e Navegação

## Introdução ao React Router
O React Router é uma biblioteca que permite implementar navegação entre páginas em uma aplicação React de página única (SPA). Ele permite que você defina rotas dentro da aplicação e exiba diferentes componentes dependendo da URL.

## Instalação do React Router
Para começar, você precisa instalar o React Router no seu projeto:
```bash
npm install react-router-dom
```

## Configuração Básica de Rotas
- **BrowserRouter**: Envolva o componente raiz da sua aplicação com `BrowserRouter` para habilitar o roteamento.
- **Route**: Define as rotas específicas e os componentes a serem renderizados.
- **Link**: Um componente utilizado para navegar entre as rotas.

Exemplo de configuração básica:
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

- `<BrowserRouter>` é o componente que contém a lógica do roteamento.
- `<Route>` define os caminhos e os componentes que serão renderizados para cada URL.
- `<Link>` é usado para criar links de navegação entre páginas, sem recarregar a página.

## Navegação Programática
Às vezes, você precisa navegar para uma rota de forma programática (por exemplo, após enviar um formulário). Para isso, usamos o hook `useHistory` (ou `useNavigate` no React Router v6).

Exemplo com `useNavigate` (React Router v6):
```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Usuário inválido');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Digite o nome de usuário" />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
```

- `useNavigate()` é um hook usado para navegação programática. Após o login bem-sucedido, a aplicação navega para o `/dashboard`.

## Rotas Dinâmicas
Você pode usar parâmetros dinâmicos nas rotas. Isso é útil quando você precisa passar dados pela URL, como um ID de usuário ou produto.

Exemplo de rota dinâmica:
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Link, useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); // Pega o parâmetro dinâmico da URL
  return <h2>Perfil do Usuário: {id}</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user/1">Usuário 1</Link> | <Link to="/user/2">Usuário 2</Link>
      </nav>
      <Route path="/user/:id" component={UserProfile} />
    </Router>
  );
}

export default App;
```

- `:id` é um parâmetro dinâmico na URL.
- `useParams()` é usado dentro de um componente para acessar os parâmetros dinâmicos da URL.

## Exercício: Criando uma Navegação de Páginas
Crie uma aplicação com múltiplas páginas (ex: Home, About, Contact) usando o React Router. Adicione uma navegação entre as páginas usando o componente `Link` e implemente rotas dinâmicas para exibir detalhes de um item (ex: produto ou post).
