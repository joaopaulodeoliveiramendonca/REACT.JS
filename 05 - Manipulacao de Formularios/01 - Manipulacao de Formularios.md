
# Manipulação de Formulários

## Controle de Inputs com useState
No React, os formulários são controlados através do estado, ou seja, o valor de um campo de formulário é armazenado no estado do componente. Com o `useState`, você pode criar entradas de texto que se atualizam automaticamente com o estado.

Exemplo de um formulário controlado:
```javascript
import React, { useState } from 'react';

function Formulario() {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    alert('Email enviado: ' + email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email: 
        <input type="email" value={email} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
```

- `useState('')` define o estado inicial do email como uma string vazia.
- O valor do input é controlado por `email`.
- `onChange` atualiza o estado sempre que o usuário digitar algo no campo.

## Validação de Formulário
A validação de formulários é importante para garantir que o usuário forneça dados válidos antes de enviar o formulário. Você pode fazer isso no `onSubmit` ou usando o `onChange` para validar enquanto o usuário digita.

Exemplo de validação simples no envio do formulário:
```javascript
import React, { useState } from 'react';

function Formulario() {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setErro('O email é obrigatório');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErro('O email não é válido');
    } else {
      setErro('');
      alert('Email enviado: ' + email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email: 
        <input type="email" value={email} onChange={handleChange} />
      </label>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
```

- Aqui, se o email for inválido ou não fornecido, uma mensagem de erro será exibida abaixo do campo.
- A expressão regular `/\S+@\S+\.\S+/` verifica se o formato do email é válido.

## Campos de Formulário Combinados (Múltiplos Inputs)
Você também pode controlar múltiplos campos de formulário com um único estado, utilizando um objeto que armazena os valores de todos os campos.

Exemplo:
```javascript
import React, { useState } from 'react';

function Formulario() {
  const [dados, setDados] = useState({ nome: '', email: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({
      ...dados,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome: ${dados.nome}, Email: ${dados.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome: 
        <input type="text" name="nome" value={dados.nome} onChange={handleChange} />
      </label>
      <label>
        Email: 
        <input type="email" name="email" value={dados.email} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
```

- Usando o estado `dados`, você pode controlar todos os campos de entrada com um único objeto, onde cada campo é atualizado separadamente por seu nome.

## Exercício: Criando um Formulário de Registro
Crie um formulário de registro simples onde o usuário insira seu nome, email e senha. Faça a validação dos campos e exiba uma mensagem de erro caso algum campo não esteja preenchido corretamente.
