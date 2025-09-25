
# Server-Side Rendering (SSR) com Next.js

## O que é Server-Side Rendering (SSR)?

O Server-Side Rendering (SSR) é uma técnica onde o conteúdo HTML da página é gerado no servidor, ao invés de ser gerado no cliente, como acontece nas aplicações React tradicionais. Isso melhora o desempenho, SEO e pode ser útil para a renderização inicial de páginas com dados dinâmicos.

O Next.js é um framework baseado no React que facilita a implementação do SSR e outras funcionalidades avançadas.

## Instalação do Next.js

Para começar a usar o Next.js, você pode criar um projeto com o comando:

```bash
npx create-next-app@latest nome-do-projeto
```

Isso vai criar uma aplicação Next.js configurada com as dependências necessárias.

## Estrutura Básica de um Projeto Next.js

Após a criação do projeto, a estrutura básica será algo como:

```
pages/
  index.js
  about.js
public/
  favicon.ico
styles/
  globals.css
  Home.module.css
```

- `pages/`: Aqui ficam as páginas da sua aplicação. O Next.js usa o sistema de roteamento baseado em arquivos, ou seja, cada arquivo dentro da pasta `pages/` se torna uma rota.
- `public/`: Arquivos estáticos como imagens e ícones.
- `styles/`: Arquivos CSS.

## Roteamento no Next.js

O roteamento no Next.js é baseado nos arquivos dentro da pasta `pages/`. Cada arquivo representa uma página da aplicação. Não é necessário configurar manualmente o roteamento como no React Router.

### Exemplo:

`pages/index.js`: Será acessível pela URL `/`.  
`pages/about.js`: Será acessível pela URL `/about`.

```jsx
// pages/index.js
export default function Home() {
  return <h1>Bem-vindo à Página Inicial</h1>;
}

// pages/about.js
export default function About() {
  return <h1>Sobre a Aplicação</h1>;
}
```

A navegação entre as páginas pode ser feita utilizando o componente `Link` do Next.js.

```jsx
import Link from 'next/link';

function Navegacao() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
```

## Renderização no Lado do Servidor com Next.js

O Next.js permite que você faça Server-Side Rendering facilmente com a função `getServerSideProps()`. Isso permite que você busque dados no servidor antes da página ser carregada no cliente.

### Exemplo de uma página com SSR:

```jsx
// pages/index.js
export async function getServerSideProps() {
  // Aqui você pode fazer chamadas a uma API ou consultar um banco de dados
  const response = await fetch('https://api.example.com/dados');
  const dados = await response.json();

  // Retorna os dados como props
  return {
    props: {
      dados,
    },
  };
}

export default function Home({ dados }) {
  return (
    <div>
      <h1>Dados da API:</h1>
      <pre>{JSON.stringify(dados, null, 2)}</pre>
    </div>
  );
}
```

`getServerSideProps()` é chamado no servidor antes da renderização da página, e os dados retornados são passados para o componente como props.

## Renderização Estática com Next.js

Além do SSR, o Next.js também suporta Static Site Generation (SSG), que gera o conteúdo HTML no momento da construção, sem depender de requisições no servidor a cada visita.

### Exemplo de SSG com `getStaticProps()`:

```jsx
// pages/index.js
export async function getStaticProps() {
  const response = await fetch('https://api.example.com/dados');
  const dados = await response.json();

  return {
    props: {
      dados,
    },
  };
}

export default function Home({ dados }) {
  return (
    <div>
      <h1>Dados da API:</h1>
      <pre>{JSON.stringify(dados, null, 2)}</pre>
    </div>
  );
}
```

`getStaticProps()` é chamado durante a construção do site e gera o conteúdo HTML estaticamente. Ideal para conteúdo que não muda frequentemente.

## Exercício: Criando um Blog com SSR e SSG no Next.js

Crie um blog simples utilizando o Next.js. As páginas do blog devem ser renderizadas de forma estática com dados de posts (ex: título e conteúdo) recuperados de uma API ou banco de dados. Implemente também uma página com SSR para exibir informações dinâmicas.
