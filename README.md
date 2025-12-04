<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">Um framework <a href="http://nodejs.org" target="_blank">Node.js</a> progressivo para construir aplicações do lado do servidor eficientes e escaláveis.</p>
<p align="center">


# Sistema de Gerenciamento de Tarefas API

Uma API RESTful construída com Nest.js para gerenciamento de tarefas e autenticação de usuários. Este projeto foi desenvolvido como trabalho de aula seguindo os padrões do framework Nest.js.

## 📋 Índice

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Executando a Aplicação](#executando-a-aplicação)
- [Documentação da API](#documentação-da-api)
- [Endpoints da API](#endpoints-da-api)
- [Autenticação](#autenticação)
- [Modelos de Dados](#modelos-de-dados)
- [Testes](#testes)
- [Deployment](#deployment)
- [Contribuindo](#contribuindo)
- [Suporte](#suporte)
- [Licença](#licença)

## Descrição

O Sistema de Gerenciamento de Tarefas é uma API desenvolvida com [Nest](https://github.com/nestjs/nest) framework TypeScript para gerenciar usuários, tarefas e projetos. Este projeto foi desenvolvido seguindo os padrões arquiteturais do Nest.js e serve como exemplo de aplicação completa com autenticação JWT, banco de dados MySQL e documentação Swagger.

## ✨ Funcionalidades

- 🔐 **Autenticação JWT** - Registro e login seguro de usuários
- 👥 **Gerenciamento de Usuários** - Operações CRUD para usuários
- ✅ **Gerenciamento de Tarefas** - Criar, ler, atualizar e excluir tarefas
- 🏗️ **Organização por Projetos** - Agrupar tarefas em projetos
- 🔒 **Controle de Acesso Baseado em Funções** - Funções de usuário (admin/user)
- 📝 **Validação de Entrada** - Validação de requisições com class-validator
- 🗄️ **Integração com Banco de Dados** - MySQL com TypeORM
- 📚 **Documentação da API** - Gerada automaticamente com Swagger
- 🛡️ **Segurança** - Hash de senhas com bcrypt
- ⚡ **Performance** - Consultas otimizadas ao banco de dados

## 🛠️ Tecnologias

- **Framework:** [Nest.js](https://nestjs.com/) v10.0.0
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) v5.1.3
- **Banco de Dados:** [MySQL](https://www.mysql.com/) v8.0+
- **ORM:** [TypeORM](https://typeorm.io/) v0.3.17
- **Autenticação:** [JWT](https://jwt.io/) com Passport.js
- **Validação:** [class-validator](https://github.com/typestack/class-validator) v0.14.0
- **Documentação:** [Swagger/OpenAPI](https://swagger.io/)
- **Segurança:** bcrypt para hash de senhas

## 📁 Estrutura do Projeto

```
src/
├── modules/                    # Módulos de funcionalidades
│   ├── users/                  # Módulo de usuários
│   │   ├── entities/          # Entidades do banco
│   │   ├── dto/               # Data Transfer Objects
│   │   ├── services/          # Lógica de negócio
│   │   ├── controllers/       # Controladores HTTP
│   │   └── users.module.ts    # Módulo de usuários
│   ├── auth/                   # Módulo de autenticação
│   │   ├── dto/               # DTOs de autenticação
│   │   ├── services/          # Serviços de autenticação
│   │   ├── controllers/       # Controladores de autenticação
│   │   └── auth.module.ts     # Módulo de autenticação
├── shared/                     # Utilitários compartilhados
│   ├── database/              # Configurações do banco
│   ├── filters/               # Filtros de exceção
│   ├── interceptors/          # Interceptores de resposta
│   └── guards/                # Guards de autenticação
├── app.module.ts              # Módulo principal
├── app.controller.ts          # Controlador principal
├── app.service.ts             # Serviço principal
└── main.ts                    # Ponto de entrada
```

## Instalação

```bash
$ npm install
```

## Configuração do Ambiente

1. Copie o arquivo de exemplo de variáveis de ambiente:
```bash
$ cp .env.example .env
```

2. Edite o arquivo `.env` com suas configurações:
```env
# Servidor
PORT=3000
NODE_ENV=development

# Banco de Dados
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_DATABASE=task_management

# JWT
JWT_SECRET=seu-segredo-jwt
JWT_EXPIRES_IN=1d
```

## Configuração do Banco de Dados

### MySQL Local

```sql
-- Crie o banco de dados
CREATE DATABASE task_management;

-- Use o banco de dados
USE task_management;
```

### Docker (Opcional)

```bash
docker run --name task-mysql \
  -e MYSQL_ROOT_PASSWORD=sua_senha \
  -e MYSQL_DATABASE=task_management \
  -p 3306:3306 \
  -d mysql:8.0
```

## Executando a Aplicação

```bash
# Modo desenvolvimento
$ npm run start:dev

# Modo produção
$ npm run build
$ npm run start:prod

# Modo watch
$ npm run start
```

## Documentação da API

Acesse a documentação Swagger em: [http://localhost:3000/api](http://localhost:3000/api)

A documentação inclui:
- Todos os endpoints disponíveis
- Esquemas de requisição/resposta
- Requisitos de autenticação
- Testes interativos

## Endpoints da API

### Autenticação
| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| POST | `/auth/register` | Registrar novo usuário | Não |
| POST | `/auth/login` | Login do usuário | Não |

### Usuários
| Método | Endpoint | Descrição | Autenticação |
|--------|----------|-----------|--------------|
| GET | `/users` | Listar todos usuários | Sim |
| GET | `/users/:id` | Buscar usuário por ID | Sim |
| POST | `/users` | Criar novo usuário | Sim |
| PATCH | `/users/:id` | Atualizar usuário | Sim |
| DELETE | `/users/:id` | Excluir usuário | Sim |

## Autenticação

### Registro
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@exemplo.com",
    "password": "senha123"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joao@exemplo.com",
    "password": "senha123"
  }'
```

### Usando o Token
```bash
curl -X GET http://localhost:3000/users \
  -H "Authorization: Bearer seu-token-aqui"
```

## Modelos de Dados

### Usuário (User)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | number | Chave primária |
| email | string | Email do usuário (único) |
| password | string | Senha criptografada |
| name | string | Nome completo |
| role | string | Função (admin/user) |
| createdAt | Date | Data de criação |
| updatedAt | Date | Data de atualização |

### Tarefa (Task)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | number | Chave primária |
| title | string | Título da tarefa |
| description | text | Descrição da tarefa |
| status | string | Status (pending/in_progress/completed) |
| dueDate | Date | Data de vencimento |
| userId | number | ID do usuário |
| createdAt | Date | Data de criação |
| updatedAt | Date | Data de atualização |

## Testes

```bash
# Testes unitários
$ npm run test

# Testes e2e
$ npm run test:e2e

# Cobertura de testes
$ npm run test:cov

# Modo watch
$ npm run test:watch
```

## Deployment

Para deploy em produção:

1. Configure as variáveis de ambiente de produção
2. Build do projeto:
```bash
$ npm run build
```

3. Execute em produção:
```bash
$ npm run start:prod
```

Para deploy em nuvem, considere usar [Mau](https://mau.nestjs.com), a plataforma oficial do NestJS para AWS:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

## Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 👨‍🏫 Trabalho de Aula

Este projeto foi desenvolvido como parte de um trabalho de aula de Nest.js. Objetivos de aprendizagem alcançados:

- ✅ **Arquitetura Modular** - Seguindo padrões do Nest.js
- ✅ **Integração com Banco de Dados** - TypeORM com MySQL
- ✅ **Sistema de Autenticação** - JWT com Passport.js
- ✅ **Design de API RESTful** - Estrutura adequada de endpoints
- ✅ **Validação de Entrada** - Usando class-validator
- ✅ **Tratamento de Erros** - Filtros globais de exceção
- ✅ **Organização de Código** - Estrutura limpa de pastas
- ✅ **Documentação** - README completo e documentação da API

Baseado no projeto de referência: [nestFAEX](https://github.com/carlosjaimeandrade/nestFAEX)

## Suporte

Nest é um projeto de código aberto licenciado pelo MIT. Ele pode crescer graças aos patrocinadores e apoio dos incríveis apoiadores. Se você quiser se juntar a eles, por favor [leia mais aqui](https://docs.nestjs.com/support).

## Stay in touch

- Autor - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)
- Discord - [NestJS Discord](https://discord.gg/G7Qnnhy)

## Licença

Nest é [licenciado pelo MIT](LICENSE).

---

**Desenvolvido com ❤️ usando Nest.js - Trabalho de Aula**
```

Este README combina:
1. O formato oficial do Nest.js com badges e estrutura
2. A documentação completa em português que seu professor espera
3. Todas as seções necessárias do projeto de referência
4. Informações específicas do trabalho de aula

Basta copiar e colar isso no seu arquivo README.md no GitHub!
