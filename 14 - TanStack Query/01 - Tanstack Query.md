
# TanStack Query (Antes React Query)

## Introdução ao TanStack Query

O TanStack Query (anteriormente conhecido como React Query) é uma poderosa ferramenta para gerenciar dados remotos, como chamadas de APIs, em aplicações React. Ele facilita a obtenção, cache, sincronização e atualização de dados de maneira eficiente, sem que você precise escrever código repetitivo para lidar com estados de carregamento, erro ou sucesso.

## Instalação do TanStack Query

Para começar a usar o TanStack Query, você precisa instalar o pacote:

```bash
npm install @tanstack/react-query
```

Depois de instalar, você deve configurar o `QueryClient` e envolvê-lo com o `QueryClientProvider` em seu componente raiz.

```jsx
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default Root;
```

O `QueryClientProvider` disponibiliza o `queryClient` para toda a aplicação.

## Usando useQuery para Buscar Dados

O `useQuery` é o hook principal para buscar dados com TanStack Query. Ele recebe dois parâmetros: o nome da query e a função assíncrona que realiza a busca dos dados.

### Exemplo de uso básico do `useQuery` para buscar dados de um usuário:

```jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchUser = async () => {
  const response = await fetch('https://api.example.com/user');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

function Usuario() {
  const { data, error, isLoading } = useQuery(['user'], fetchUser);

  if (isLoading) return <p>Carregando...</p>;
  if (error instanceof Error) return <p>Erro: {error.message}</p>;

  return <div>Nome: {data.name}</div>;
}

export default Usuario;
```

- `isLoading`: Indica se a requisição está em andamento.
- `data`: Contém os dados retornados pela requisição.
- `error`: Contém qualquer erro que tenha ocorrido durante a requisição.

## Usando useMutation para Enviar Dados

O `useMutation` é usado quando você precisa enviar dados para o servidor (POST, PUT, DELETE, etc.). Ele lida com a criação, atualização ou remoção de dados.

### Exemplo de uso do `useMutation` para criar um novo usuário:

```jsx
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

const createUser = async (newUser) => {
  const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error('Erro ao criar usuário');
  return response.json();
};

function CriarUsuario() {
  const [name, setName] = useState('');
  const mutation = useMutation(createUser, {
    onSuccess: (data) => {
      console.log('Usuário criado:', data);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do usuário"
      />
      <button type="submit">Criar</button>
      {mutation.isLoading && <p>Enviando...</p>}
      {mutation.isError && <p>Erro: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Usuário criado com sucesso!</p>}
    </form>
  );
}

export default CriarUsuario;
```

- `mutation.mutate()` chama a função de mutação para enviar os dados.
- `onSuccess` é chamado quando a mutação é bem-sucedida.

## Cache e Sincronização Automática

O TanStack Query tem uma funcionalidade de cache automático e sincronização de dados. Isso significa que, uma vez que os dados são carregados, eles são armazenados em cache e serão reutilizados em futuras requisições até que o cache expire ou seja invalidado.

Por padrão, a query será refeita automaticamente após um tempo configurado ou se o componente que a utiliza for montado novamente.

### Para invalidação manual do cache:

```jsx
import { useQueryClient } from '@tanstack/react-query';

function MeuComponente() {
  const queryClient = useQueryClient();

  const handleInvalidarCache = () => {
    queryClient.invalidateQueries(['user']); // Invalida a cache da query 'user'
  };

  return <button onClick={handleInvalidarCache}>Invalidar Cache</button>;
}
```

## Exercício: Criando uma Página de Listagem de Usuários

Crie uma página que exiba uma lista de usuários a partir de uma API utilizando o `useQuery`. Implemente a funcionalidade de adicionar um novo usuário com o `useMutation`.
