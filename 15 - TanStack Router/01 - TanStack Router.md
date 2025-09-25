
# TanStack Router

## Introdução ao TanStack Router

O TanStack Router (anteriormente React Router v6) é uma biblioteca de roteamento para React que oferece uma maneira declarativa e fácil de gerenciar a navegação entre páginas em sua aplicação. Ele permite criar rotas, passagens de parâmetros e navegação programática, tudo sem precisar de recarregamentos de página.

## Instalação do TanStack Router

Para começar a usar o TanStack Router, instale a biblioteca:

```bash
npm install @tanstack/router
```

Após a instalação, você pode começar a configurar suas rotas.

## Configurando o TanStack Router

### Criação do Router e Rotas

Comece criando uma instância do router e definindo as rotas que sua aplicação vai utilizar.

### Exemplo básico de configuração:

```jsx
import React from 'react';
import { Router, Route, createBrowserRouter } from '@tanstack/router';

// Definindo as páginas
const Home = () => <h2>Bem-vindo à Página Inicial</h2>;
const About = () => <h2>Sobre Nós</h2>;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default function App() {
  return <Router router={router} />;
}
```

- `createBrowserRouter()` cria um roteador com base no histórico de navegação do navegador.
- `element` define o componente que será renderizado quando a rota correspondente for acessada.

### Navegação entre as Páginas

Você pode navegar entre as páginas usando o componente `Link` fornecido pelo TanStack Router.

### Exemplo de navegação:

```jsx
import React from 'react';
import { Link } from '@tanstack/router';

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
  );
}

export default Nav;
```

- `Link` funciona de maneira similar ao `<a>` em HTML, mas sem recarregar a página.

### Rotas Dinâmicas com Parâmetros

Você pode definir rotas dinâmicas usando parâmetros. Isso é útil quando você deseja passar informações como um ID de produto ou usuário na URL.

### Exemplo de rota dinâmica:

```jsx
import React from 'react';
import { useParams } from '@tanstack/router';

const UserProfile = () => {
  const { id } = useParams(); // Pega o parâmetro da URL
  return <h2>Perfil do Usuário {id}</h2>;
};

const router = createBrowserRouter([
  {
    path: '/user/:id', // :id é um parâmetro dinâmico
    element: <UserProfile />,
  },
]);

export default function App() {
  return <Router router={router} />;
}
```

- `:id` define um parâmetro dinâmico na URL.
- `useParams()` permite acessar esse parâmetro dentro do componente.

### Redirecionamento e Navegação Programática

Você também pode redirecionar o usuário ou navegar programaticamente usando `navigate()`.

### Exemplo de navegação programática:

```jsx
import React from 'react';
import { useNavigate } from '@tanstack/router';

const RedirectButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about'); // Redireciona programaticamente para a página "About"
  };
  return <button onClick={handleClick}>Ir para About</button>;
};

export default RedirectButton;
```

- `useNavigate()` é um hook que permite navegar para outras rotas programaticamente.

## Exercício: Criando um Aplicativo com Navegação Dinâmica

Crie um aplicativo que tenha várias páginas, incluindo páginas de usuários e um formulário para adicionar novos usuários. Use TanStack Router para gerenciar as rotas e parâmetros dinâmicos.
