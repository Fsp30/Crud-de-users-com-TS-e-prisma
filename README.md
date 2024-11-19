# CRUD de Usuários com Prisma, MongoDB e TypeScript

Este projeto é um CRUD (Create, Read, Update, Delete) de usuários desenvolvido com **TypeScript**, utilizando o **Prisma** como ORM e o **MongoDB** como banco de dados online.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript/TypeScript.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Prisma**: ORM para manipulação de banco de dados.
- **MongoDB**: Banco de dados NoSQL online.
- **Express**: Framework para construção de APIs.
- **Zod**: Validação de dados.
- **dotenv**: Gerenciamento de variáveis de ambiente.

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- MongoDB online configurado (ex.: MongoDB Atlas)

  ---

### 2. Configuração do Ambiente

Clone o repositório:
git clone https://github.com/Fsp30/Crud-de-users-com-TS-e-prisma

Entre na pasta do projeto:
cd ts-back

Instale as dependências:
npm install

Crie um arquivo .env na raiz do projeto e configure a variável de ambiente com a URL do banco de dados MongoDB:
DATABASE_URL="sua_url_do_mongodb"

---

### 3. Configuração do Prisma

Sincronize o esquema do Prisma com o banco de dados:
npx prisma db push

Para visualizar o modelo do banco no Prisma Studio, execute:
npx prisma studio

---

### 4. Executar o Projeto
Inicie o servidor de desenvolvimento:
npm run dev
---


### A API estará disponível em: http://localhost:3000

---

🧩 Estrutura do Projeto
├── src
│   ├── controller
│   │   ├── UseUsers
│   │   │   ├── getUser.ts
│   │   │   ├── postUser.ts
│   │   │   ├── deleteUser.ts
│   │   │   ├── updateUser.ts
│   ├── schemas
│   │   ├── userSchema.ts
│   ├── server.ts
├── prisma
│   ├── schema.prisma
├── .env
├── package.json
└── tsconfig.json
---

🌟 Funcionalidades
-- **Criar Usuário**: Registra um novo usuário no banco de dados.
-- **Listar Usuários**: Retorna todos os usuários cadastrados.
-- **Atualizar Usuário**: Atualiza informações de um usuário específico.
-- **Deletar Usuário**: Remove um usuário do banco de dados.

---

