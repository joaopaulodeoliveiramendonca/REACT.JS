
# ShadCN

## Introdução ao ShadCN

O ShadCN é uma biblioteca de UI acessível e personalizável para React, que ajuda a criar interfaces limpas e bem estilizadas de maneira rápida. Ele oferece componentes prontos para uso, como botões, modais, formulários e mais, todos otimizados para acessibilidade.

## Instalação do ShadCN

Para usar o ShadCN, você deve instalar o pacote correspondente em seu projeto React:

```bash
npm install @shadcn/ui
```

Depois, você pode começar a usar os componentes diretamente em seu aplicativo.

## Componentes Básicos do ShadCN

O ShadCN oferece uma série de componentes úteis, todos projetados para serem facilmente integrados e personalizados. Vamos explorar alguns dos componentes mais comuns.

### Botões

O ShadCN fornece um botão básico com estilo e acessibilidade integrados.

#### Exemplo de botão:

```jsx
import { Button } from '@shadcn/ui';

function App() {
  return <Button variant="primary">Clique aqui</Button>;
}

export default App;
```

- `variant="primary"` define o estilo do botão.

O ShadCN inclui várias variantes de estilo, como `primary`, `secondary`, `danger`, etc.

### Inputs e Campos de Formulário

O ShadCN também oferece componentes para inputs e outros campos de formulário com suporte a validação e estilos prontos.

#### Exemplo de input:

```jsx
import { Input } from '@shadcn/ui';

function Formulario() {
  return (
    <form>
      <label>Nome</label>
      <Input type="text" placeholder="Digite seu nome" />
    </form>
  );
}

export default Formulario;
```

- `Input` facilita a criação de campos de texto estilizados com suporte de acessibilidade.

### Modais

Os modais são úteis para exibir conteúdo sobre a interface sem navegar para outra página. O ShadCN facilita a criação de modais acessíveis.

#### Exemplo de modal:

```jsx
import { Modal, ModalTrigger, ModalContent } from '@shadcn/ui';

function App() {
  return (
    <Modal>
      <ModalTrigger>Abrir Modal</ModalTrigger>
      <ModalContent>
        <h2>Conteúdo do Modal</h2>
        <p>Este é um modal de exemplo!</p>
      </ModalContent>
    </Modal>
  );
}

export default App;
```

- `ModalTrigger` é o botão ou gatilho que abre o modal.
- `ModalContent` contém o conteúdo a ser exibido no modal.

## Customizando o ShadCN

Embora o ShadCN forneça componentes com um estilo padrão, você pode personalizá-los facilmente. Como ele é baseado em styled-components ou CSS-in-JS, você pode alterar as propriedades diretamente ou usar classes utilitárias do TailwindCSS para ajustes rápidos.

#### Exemplo de customização de um botão:

```jsx
import { Button } from '@shadcn/ui';

function App() {
  return (
    <Button className="bg-red-500 hover:bg-red-700">
      Botão Personalizado
    </Button>
  );
}

export default App;
```

- `className="bg-red-500 hover:bg-red-700"` aplica as classes utilitárias do TailwindCSS para personalizar o botão.

## Acessibilidade no ShadCN

O ShadCN tem como objetivo garantir que todos os componentes sejam acessíveis por padrão. Isso significa que os componentes vêm com suporte para navegação por teclado, leitura de tela e outras considerações de acessibilidade.

Por exemplo, ao usar o Modal, ele automaticamente gerencia o foco dentro do modal, garantindo que a navegação seja consistente e acessível para todos os usuários, incluindo aqueles com deficiências.

## Exercício: Criando um Formulário com ShadCN

Crie um formulário que use o ShadCN para os campos de entrada e botões. Adicione validação simples para garantir que o usuário preencha todos os campos corretamente. Inclua um Modal para exibir uma mensagem de sucesso quando o formulário for enviado.
