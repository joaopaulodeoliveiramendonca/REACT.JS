
# Componentes e Props

## Componentes no React
Os componentes no React são como funções que retornam uma representação da interface de usuário. Eles podem ser:

- **Componentes Funcionais**: Funções JavaScript que retornam JSX.
- **Componentes de Classe**: Uma classe que estende `React.Component` e tem um método `render()`. Esses componentes são mais raros hoje em dia, pois os hooks trouxeram simplicidade.

No React moderno, usamos principalmente componentes funcionais.

## Template modelo

https://github.com/horizon-ui/horizon-tailwind-react

https://github.com/ashsajal1/react-saas-template

https://github.com/TailAdmin/free-react-tailwind-admin-dashboard


## Props: Passando dados entre componentes
Props são propriedades que você passa de um componente pai para um componente filho. Elas permitem que você compartilhe dados entre componentes.

Exemplo:
```javascript
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

function App() {
  return <Saudacao nome="João" />;
}
```
O componente `Saudacao` recebe uma prop chamada `nome`, que é usada dentro do JSX para exibir a saudação. O componente `App` passa o valor "João" para a prop `nome` do componente `Saudacao`.

## Renderização Condicional
Você pode renderizar diferentes elementos ou componentes dependendo de uma condição, utilizando expressões condicionais no JSX.

### Exemplo com `if`:
```javascript
function App() {
  const usuarioAutenticado = true;
  if (usuarioAutenticado) {
    return <h1>Bem-vindo!</h1>;
  } else {
    return <h1>Faça login</h1>;
  }
}
```

### Ou com o operador ternário:
```javascript
function App() {
  const usuarioAutenticado = true;
  return (
    <h1>{usuarioAutenticado ? "Bem-vindo!" : "Faça login"}</h1>
  );
}
```

## Listas e Keys
Ao renderizar listas de dados em React, você deve usar o `map()` para iterar e criar um novo componente para cada item da lista. É importante também fornecer uma `key` única para cada item, o que ajuda o React a identificar e atualizar os itens de forma eficiente.

Exemplo:
```javascript
function ListaDeTarefas() {
  const tarefas = ['Estudar', 'Lavar a louça', 'Fazer exercício'];
  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
  );
}
```
Aqui, cada item da lista recebe uma `key` (no caso, o `index` do `map()`) para garantir que o React consiga identificar e atualizar corretamente cada elemento.

## Exercício: Criando uma Lista de Itens
Crie uma lista de tarefas simples utilizando as técnicas de renderização condicional, props e listagem. O componente pai vai passar as tarefas para o componente filho como props, e o filho vai renderizá-las.
