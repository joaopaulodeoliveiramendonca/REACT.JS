
# TypeScript com React

## Introdução ao TypeScript

O TypeScript é uma linguagem baseada em JavaScript que adiciona tipagem estática e outras funcionalidades poderosas. Ele ajuda a detectar erros em tempo de desenvolvimento e melhora a manutenção do código, principalmente em projetos maiores.

Quando usado com o React, o TypeScript pode garantir que seus componentes recebam e retornem os tipos corretos de dados, o que melhora a robustez e a clareza do código.

## Instalação do TypeScript em um Projeto React

Se você estiver começando um novo projeto com Create React App, pode configurar o TypeScript diretamente:

```bash
npx create-react-app nome-do-projeto --template typescript
```

Se você já tem um projeto React e quer adicionar o TypeScript, basta instalar as dependências:

```bash
npm install typescript @types/react @types/react-dom
```

E renomear os arquivos `.js` para `.tsx`, pois o TypeScript usará esse formato para arquivos que contêm JSX.

## Tipando Componentes em React com TypeScript

### Componentes Funcionais com Props Tipadas

Quando você cria um componente funcional com props em TypeScript, você deve definir um tipo para as props.

#### Exemplo:

```tsx
import React from 'react';

interface SaudacaoProps {
  nome: string;
}

const Saudacao: React.FC<SaudacaoProps> = ({ nome }) => {
  return <h1>Olá, {nome}!</h1>;
};

export default Saudacao;
```

`interface` é usada para definir a forma das props que o componente vai receber. No caso, o componente `Saudacao` espera uma prop chamada `nome` do tipo `string`.

`React.FC` é um tipo genérico para componentes funcionais em TypeScript, que já traz algumas propriedades típicas como `children`.

### Tipando Estado com useState

O `useState` em TypeScript também precisa de tipagem para o estado que será gerenciado. Você pode definir o tipo do estado diretamente ao inicializá-lo:

#### Exemplo:

```tsx
import React, { useState } from 'react';

const Contador: React.FC = () => {
  const [contador, setContador] = useState<number>(0);
  const incrementar = () => setContador(contador + 1);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Contador;
```

Aqui, o `useState<number>(0)` define que o estado `contador` será do tipo `number`.

### Tipando Funções de Eventos

Você pode tipar eventos como `onClick`, `onChange`, etc., em TypeScript. Para isso, utilize os tipos de evento fornecidos pelo React.

#### Exemplo:

```tsx
import React, { useState } from 'react';

const Formulario: React.FC = () => {
  const [nome, setNome] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  return (
    <form>
      <input type="text" value={nome} onChange={handleChange} />
    </form>
  );
};

export default Formulario;
```

`React.ChangeEvent<HTMLInputElement>` é o tipo correto para um evento de mudança em um campo de entrada (`<input>`).

### Usando useEffect com TypeScript

Quando você usa o `useEffect` em TypeScript, é importante definir corretamente as dependências e, se necessário, o tipo do retorno da função que é chamada dentro do `useEffect`.

#### Exemplo:

```tsx
import React, { useState, useEffect } from 'react';

const Usuario: React.FC = () => {
  const [usuario, setUsuario] = useState<{ nome: string } | null>(null);

  useEffect(() => {
    fetch('https://api.exemplo.com/usuario')
      .then((response) => response.json())
      .then((dados) => setUsuario(dados));
  }, []);

  if (!usuario) {
    return <p>Carregando...</p>;
  }

  return <h1>Nome: {usuario.nome}</h1>;
};

export default Usuario;
```

`{ nome: string } | null` define que o estado `usuario` pode ser um objeto com a propriedade `nome` ou `null` se os dados ainda não forem carregados.

## Exercício: Refatorando um Projeto React para TypeScript

Pegue um projeto React já existente e refatore para usar TypeScript. Isso envolve:

- Tipar os props dos componentes.
- Tipar o estado gerenciado pelo `useState`.
- Tipar eventos e funções dentro dos componentes.
- Resolver qualquer tipo de erro ou mensagem do TypeScript.
