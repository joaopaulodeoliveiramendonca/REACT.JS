import React, { useState } from 'react';

// Componente Contador com useState
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

// Componente Formulario com Manipulação de Eventos
function Formulario() {
  const [nome, setNome] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <input type="text" value={nome} onChange={handleChange} />
      <p>O nome digitado é: {nome}</p>
    </div>
  );
}

// Componente Pai e Filho para Passar Dados de Componentes Filhos para Pais
function Filho(props: { atualizarNome: (nome: string) => void }) {
  const [nome, setNome] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const atualizarNome = (novoNome: string) => {
    setNomeFilho(novoNome);
  };

  return (
    <div>
      <h1>Nome do Filho: {nomeFilho}</h1>
      <Filho atualizarNome={atualizarNome} />
    </div>
  );
}

// Componente Lista de Tarefas com Estado
function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const removerTarefa = (index: number) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Adicionar tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa} <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente principal App que utiliza todos os conceitos
function App() {
  return (
    <div>
      <h1>Exemplo de Gerenciamento de Estado e Eventos</h1>

      {/* Componente Contador */}
      <Contador />

      {/* Componente Formulario */}
      <Formulario />

      {/* Componente Pai e Filho */}
      <Pai />

      {/* Componente Lista de Tarefas */}
      <ListaDeTarefas />
    </div>
  );
}

export default App;