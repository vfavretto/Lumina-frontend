<br id="topo">
<div align="center">
  
![banner](https://i.imgur.com/hHtjEmX.png)

</div>

<h1 align="center">Sprint 1: 04/08/2024 a 30/08/2024</h1>

<p align="center">
    <a href="#objetivo">Objetivos da Sprint</a>  |  
    <a href="#entrega">Entregas</a>  |
    <a href="#estrutura">Estruturação das Sprints</a>  |
    <a href="#links">Links úteis</a>  
</p>

  Estabelecer uma base sólida para o desenvolvimento do projeto, incluindo a escolha e configuração das tecnologias principais, estruturação inicial do banco de dados e criação de um protótipo funcional. Essa etapa visa definir os alicerces técnicos e garantir que todos os integrantes do time estejam alinhados com os requisitos funcionais e não funcionais do sistema. Além disso, o foco está em criar um ambiente de trabalho organizado, permitindo que as fases posteriores sejam realizadas de forma ágil e eficiente.

<span id="objetivo">
  
## :dart: Objetivos da Sprint
Os requisitos funcionais e não funcionais contemplados nesta sprint são:
  
### Requisitos Funcionais:

- **RF 01:** Login - Fazer o login para acessar a plataforma.
- **RF 02:** Cadastro - Cadastrar dados para criar um perfil.
  
### Requisitos Não Funcionais:

- **RNF 01:** Utilizar linguagens de programação JavaScript e TypeScript.
- **RNF 02:** Banco de dados MongoDB.


→ [Voltar ao topo](#topo)

<span id="entrega">

## :heavy_check_mark: Entregas

Nesta sprint, foram validados os principais artefatos SCRUM, incluindo o Backlog do Produto e User Stories, por meio de reuniões com o P.O. e demais stakeholders.

Adicionalmente, foi desenvolvido e apresentado um protótipo inicial no [Figma](https://www.figma.com/proto/s7gklcQtZwSzvlw5APOJWC/Lumina?node-id=0-1&t=dWRO7ttmqv7WQjlz-1), abrangendo a interface visual e os fluxos de navegação essenciais. Esse projeto, escrito utilizando React, integra as seguintes entregas:

### RF 01: Login

<details>
   <summary>Clique aqui para ver detalhes sobre o desenvolvimento deste requisito</summary>
    <br>
Desenvolvimento da funcionalidade de login, garantindo o acesso seguro dos usuários à plataforma. As etapas implementadas foram:

- Autenticação de usuários com validação de credenciais.
- Feedback em caso de erro de autenticação.
- Criação de tela inicial acessível apenas após o login.

![login](https://i.imgur.com/jeHNQ7O.png)


</details>

### RF 02: Cadastro

<details>
   <summary>Clique aqui para ver detalhes sobre o desenvolvimento deste requisito</summary>
    <br>
Implementação do fluxo de cadastro, que permite a criação de novos perfis de usuários. As principais ações foram:

- Formulário dinâmico para registro de informações do usuário.
- Validação de dados obrigatórios, como e-mail e senha.
- Integração com o banco de dados MongoDB para armazenamento das informações.

![cadastro](https://i.imgur.com/HxLijjB.png)

![cadastro2](https://i.imgur.com/3rUcaJ8.png)

</details>

→ [Voltar ao topo](#topo)

<span id="estrutura">
  
## :bookmark_tabs: Estruturação das Sprints

Para estruturar as entregas da sprint, os seguintes pontos foram realizados:

### Estruturação do Banco de Dados
  
- Criação do Modelo Entidade-Relacionamento (MER) com base nos requisitos.
- Configuração do MongoDB, incluindo coleções de "Usuários" e "Sessões".

### Arquitetura MVC

- Definição das camadas Model, View e Controller.
- Configuração inicial do servidor para rotas principais (login e cadastro).

### Protótipo de Alta Fidelidade

- Validação da interface inicial com o cliente e ajuste de detalhes de usabilidade.

### Implementação de Microsserviços

- Planejamento e configuração de um microsserviço inicial para autenticação.

→ [Voltar ao topo](#topo)

<span id="links">
  
## :link: Links úteis

- Site do projeto:
  - [Lumina](lumina3-0.vercel.app/)
  - [Front-end](lumina-frontend.vercel.app)
  - [Back-end](lumina-backend-three.vercel.app/)
  <br>
- Repositório do site:
  - [Front-end](https://github.com/vfavretto/Lumina-frontend)
  - [Back-end](https://github.com/vfavretto/Lumina-backend)
   
→ [Voltar ao topo](#topo)
