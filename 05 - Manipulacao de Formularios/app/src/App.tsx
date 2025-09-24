import React, { useState } from 'react';

// Componente de Formulário Controlado com useState
function Formulario() {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
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

// Componente de Formulário com Campos Combinados (Nome e Email)
function FormularioCombinado() {
  const [dados, setDados] = useState({ nome: '', email: '' });
  const [erro, setErro] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!dados.nome || !dados.email) {
      setErro('Todos os campos são obrigatórios');
    } else {
      setErro('');
      alert(`Nome: ${dados.nome}, Email: ${dados.email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={dados.email}
          onChange={handleChange}
        />
      </label>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}

// Componente de Formulário de Registro com Validação
function FormularioRegistro() {
  const [dados, setDados] = useState({ nome: '', email: '', senha: '' });
  const [erro, setErro] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!dados.nome || !dados.email || !dados.senha) {
      setErro('Todos os campos são obrigatórios');
    } else if (!/\S+@\S+\.\S+/.test(dados.email)) {
      setErro('O email não é válido');
    } else if (dados.senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres');
    } else {
      setErro('');
      alert(`Registro completo! Nome: ${dados.nome}, Email: ${dados.email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={dados.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          name="senha"
          value={dados.senha}
          onChange={handleChange}
        />
      </label>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <button type="submit">Registrar</button>
    </form>
  );
}

// Componente principal App que utiliza todos os formulários
function App() {
  return (
    <div>
      <h1>Exemplo de Manipulação de Formulários</h1>

      {/* Componente Formulário Controlado */}
      <Formulario />

      <h2>Formulario Combinado (Nome e Email)</h2>
      {/* Componente Formulário Combinado */}
      <FormularioCombinado />

      <h2>Formulario de Registro</h2>
      {/* Componente Formulário de Registro */}
      <FormularioRegistro />
    </div>
  );
}

export default App;
