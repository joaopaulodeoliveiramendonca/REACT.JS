
# State e Eventos

## Gerenciamento de Estado com useState
O estado é uma parte fundamental do React, pois ele permite que seus componentes sejam dinâmicos e interajam com o usuário. O hook `useState` é usado para adicionar estado a um componente funcional.

Exemplo básico de uso do `useState`:
```javascript
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;
```

- `useState(0)` define o estado inicial como `0`.
- `setContador()` é a função usada para atualizar o estado.
- O evento `onClick` chama a função `incrementar`, que aumenta o valor do contador a cada clique.

## Manipulação de Eventos
Em React, eventos como `onClick`, `onChange`, `onSubmit`, etc., são usados para responder a interações do usuário. Quando um evento ocorre, você pode chamar uma função para atualizar o estado ou executar outras ações.

Exemplo de manipulação de evento de input (`onChange`):
```javascript
import React, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <input type="text" value={nome} onChange={handleChange} />
      <p>O nome digitado é: {nome}</p>
    </div>
  );
}

export default Formulario;
```

- O valor do input é controlado pelo estado `nome`.
- O evento `onChange` é disparado sempre que o usuário digitar algo, e a função `handleChange` atualiza o estado.

## Passando Dados de Componentes Filhos para Pais (Callbacks)
Em React, os dados geralmente fluem de pais para filhos via props. No entanto, pode ser necessário que um componente filho envie dados de volta para o pai. Para fazer isso, você pode passar uma função de callback do pai para o filho, que o filho pode chamar para passar dados de volta.

Exemplo:
```javascript
function Filho(props) {
  const [nome, setNome] = useState('');

  const handleChange = (event) => {
    setNome(event.target.value);
    props.atualizarNome(event.target.value); // Chama a função do pai
  };

  return (
    <div>
      <input type="text" value={nome} onChange={handleChange} />
    </div>
  );
}

function Pai() {
  const [nomeFilho, setNomeFilho] = useState('');

  const atualizarNome = (novoNome) => {
    setNomeFilho(novoNome);
  };

  return (
    <div>
      <h1>Nome do Filho: {nomeFilho}</h1>
      <Filho atualizarNome={atualizarNome} />
    </div>
  );
}

export default Pai;
```

- O componente `Pai` passa a função `atualizarNome` para o componente `Filho` como uma prop.
- O componente `Filho` chama `props.atualizarNome` para enviar o valor digitado de volta ao pai.

## Exercício: Criando uma Lista de Tarefas com Estado
Crie um componente de Lista de Tarefas onde o estado é usado para adicionar e remover tarefas. Cada tarefa deve ser exibida em uma lista e o estado deve ser atualizado toda vez que uma nova tarefa for adicionada ou removida.
