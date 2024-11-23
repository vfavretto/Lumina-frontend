<br id="topo">
<div align="center">
  
![banner](https://i.imgur.com/hHtjEmX.png)

</div>

<h1 align="center">Sprint 2: 04/09/2024 a 05/10/2024</h1>

<p align="center">
    <a href="#objetivo">Objetivos da Sprint</a>  |  
    <a href="#entrega">Entregas</a>  |
    <a href="#estrutura">Estruturação das Sprints</a>  |
    <a href="#links">Links úteis</a>  
</p>

  Implementar as principais funcionalidades relacionadas à experiência do usuário no sistema, incluindo o cadastro, login e autenticação. O objetivo é garantir que os usuários possam acessar o sistema de maneira segura e intuitiva, utilizando APIs de autenticação modernas e tokens que asseguram a proteção dos dados. Essa etapa é crucial para criar uma estrutura confiável de interação com o sistema, fornecendo a base para o gerenciamento de usuários e funcionalidades personalizadas. Além disso, serão realizadas validações de dados e testes iniciais para assegurar a robustez das funcionalidades.

<span id="objetivo">
  
## :dart: Objetivos da Sprint

Os requisitos funcionais e não funcionais contemplados nesta sprint são:
  
### Requisitos Funcionais:

- **RF 01:** Login 
- **RF 02:** Cadastro
  
### Requisitos Não Funcionais:

- **RNF 01:** Linguagem de programação JavaScript e TypeScript.
- **RNF 02:** Banco de dados MongoDB.
- **RNF 03:** Interface de fácil usabilidade para todas as faixas etárias.

→ [Voltar ao topo](#topo)

<span id="entrega">

## :heavy_check_mark: Entregas

Nesta sprint, o foco foi na implementação de funcionalidades para cadastro e autenticação, além de melhorias na documentação e garantia de qualidade do código. As entregas foram:

### RF 01: Login

<details>
   <summary>Clique aqui para ver detalhes sobre o desenvolvimento deste requisito</summary>
    <br>
Aplicação do login social:
  
- Configuração de APIs de terceiros para autenticação.
- Implementação de autenticação por tokens (JWT) para sessões seguras e escaláveis.
  
</details>

### RF 02: Cadastro

<details>
   <summary>Clique aqui para ver detalhes sobre o desenvolvimento deste requisito</summary>
    <br>
Desenvolvimento de uma interface funcional para novos usuários:
  
- Formulário dinâmico com validação de campos obrigatórios (nome, e-mail, senha)
- Integração com o backend para salvar os dados no MongoDB.

</details>

### RNF 01: Linguagem de programação JavaScript e TypeScript.
<details>
   <summary>Clique aqui para ver detalhes sobre o desenvolvimento deste requisito</summary>
    <br>
Documentação da API via Swagger:
  
- Criação da documentação inicial da API REST para endpoints de login e cadastro.
  
Testes Unitários:
- Implementação de testes unitários utilizando Jest para verificar a funcionalidade e integridade das rotas principais de login e cadastro.

</details>

→ [Voltar ao topo](#topo)

<span id="estrutura">
  
## :bookmark_tabs: Estruturação das Sprints

Para estruturar as entregas da sprint, os seguintes pontos foram realizados:

### Cadastro de Usuários:

- Implementação do formulário de cadastro com validações de entrada.
- Integração com o banco de dados MongoDB para persistir informações de novos usuários.

### Autenticação com Tokens:

- Configuração de autenticação via JWT (JSON Web Token) para garantir segurança nas sessões.

### Documentação da API com Swagger:

- Criação da documentação inicial das rotas da API REST, incluindo exemplos de requisições para endpoints de cadastro e login.

### Testes Unitários:

- Implementação de testes para verificar a funcionalidade de autenticação e persistência de dados.

### Aprimoramento da Arquitetura MVC
- Refinamento das camadas de Controller e Model.
- Adição de lógicas específicas para validação de credenciais e manipulação de dados no banco.
- Separação clara das responsabilidades para facilitar manutenção.

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
