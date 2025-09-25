
# Desenvolvimento do Projeto Final

Nesta semana, vamos reunir tudo o que você aprendeu até agora para construir um projeto completo utilizando React, TailwindCSS, TanStack Query, TanStack Router e ShadCN.
O objetivo é aplicar os conceitos de gerenciamento de estado, roteamento e estilização responsiva em um projeto funcional.

## Objetivo do Projeto Final

Criar uma aplicação de Gestão de Tarefas (ou outro tema de sua escolha) com as seguintes funcionalidades:

- **Cadastro de Tarefas**: O usuário pode adicionar novas tarefas, com título e descrição.
- **Listagem de Tarefas**: Exibição de tarefas em uma lista com opções para editar e excluir.
- **Estado Global**: Gerenciar as tarefas globalmente com TanStack Query ou Zustand.
- **Roteamento**: Navegação entre a página inicial, página de detalhes de tarefas e uma página para adicionar/editá-las.
- **Design Responsivo**: Layout que se adapta a diferentes tamanhos de tela, utilizando TailwindCSS.
- **Acessibilidade**: Garantir que a aplicação seja acessível, usando ShadCN e suas funcionalidades de acessibilidade.

## Passos para a Construção do Projeto

### 1. Estrutura do Projeto

Vamos começar criando a estrutura básica do projeto. Defina o layout das páginas:

- **Página Inicial**: Exibe uma lista de tarefas.
- **Página de Detalhes**: Exibe detalhes de uma tarefa específica.
- **Página de Cadastro/Alteração de Tarefa**: Formulário para adicionar ou editar tarefas.

```bash
src/
  components/
    TaskList.js
    TaskItem.js
    TaskForm.js
  pages/
    Home.js
    TaskDetail.js
    TaskEdit.js
  services/
    taskService.js  # Lida com requisições API usando TanStack Query
  App.js
  index.js
```

### 2. Definindo o Estado Global com TanStack Query ou Zustand

Use TanStack Query para gerenciar as tarefas da aplicação. Configure o `QueryClientProvider` e crie as funções de fetch, create, update e delete.

#### Exemplo de serviço com TanStack Query:

```javascript
// services/taskService.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function useTasks() {
  return useQuery(['tasks'], async () => {
    const response = await fetch('/api/tasks');
    return response.json();
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation(
    async (newTask) => {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask),
      });
      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['tasks']);
      },
    }
  );
}
```

### 3. Implementando Roteamento com TanStack Router

Defina as rotas da sua aplicação para navegar entre as páginas.

```javascript
import { createBrowserRouter, RouterProvider } from '@tanstack/router';
import Home from './pages/Home';
import TaskDetail from './pages/TaskDetail';
import TaskEdit from './pages/TaskEdit';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/task/:id', element: <TaskDetail /> },
  { path: '/task/edit/:id', element: <TaskEdit /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

### 4. Criando os Componentes com ShadCN e TailwindCSS

Crie os componentes da aplicação utilizando ShadCN e TailwindCSS para estilizar.

#### Exemplo de um componente de lista de tarefas:

```javascript
import { Button } from '@shadcn/ui';
import { useNavigate } from '@tanstack/router';

function TaskItem({ task }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-bold">{task.title}</h3>
      <p className="text-sm">{task.description}</p>
      <div className="mt-2">
        <Button onClick={() => navigate(`/task/${task.id}`)}>Ver Detalhes</Button>
        <Button variant="secondary" onClick={() => navigate(`/task/edit/${task.id}`)}>
          Editar
        </Button>
      </div>
    </div>
  );
}
```

### 5. Adicionando Funcionalidades de CRUD

Implemente as funcionalidades para adicionar, editar e excluir tarefas.

#### Exemplo de adicionar uma nova tarefa:

```javascript
import { useCreateTask } from '../services/taskService';

function TaskForm() {
  const { mutate: createTask } = useCreateTask();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title: event.target.title.value,
      description: event.target.description.value,
    };
    createTask(newTask);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="title" placeholder="Título" className="w-full p-2 border rounded" />
      <textarea name="description" placeholder="Descrição" className="w-full p-2 border rounded"></textarea>
      <Button type="submit">Adicionar Tarefa</Button>
    </form>
  );
}
```

### 6. Testes e Acessibilidade

Garanta que a aplicação tenha testes adequados e seja acessível. Use `useQuery` e `useMutation` para garantir que os dados sejam carregados corretamente, e valide os componentes com React Testing Library.

- Teste a renderização da lista de tarefas.
- Teste a criação e edição de tarefas.

### 7. Implementando Design Responsivo

Aplique TailwindCSS para garantir que sua aplicação seja responsiva em diferentes tamanhos de tela. Use classes como `sm:`, `md:`, `lg:` para ajustar o layout.

#### Exemplo de layout responsivo para a lista de tarefas:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {tasks.map((task) => (
    <TaskItem key={task.id} task={task} />
  ))}
</div>
```

## Conclusão do Projeto

Depois de concluir o projeto, você terá criado uma aplicação completa com as seguintes funcionalidades:

- Gerenciamento de tarefas com adição, edição e exclusão.
- Roteamento entre páginas com TanStack Router.
- Design responsivo com TailwindCSS.
- Acessibilidade com ShadCN.

Esse projeto irá ajudá-lo a consolidar todos os conceitos aprendidos até agora e demonstrar sua capacidade de desenvolver aplicações completas com as tecnologias modernas de React.
