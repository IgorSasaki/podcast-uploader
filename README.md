# 🎙️ Podcast Uploader

Sistema simples em Node.js para upload e gerenciamento de episódios de podcasts. A aplicação permite o cadastro de podcasts e o envio de episódios com arquivos de áudio vinculados, utilizando SQLite como banco de dados local.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeORM**
- **SQLite**
- **Multer**
- **JavaScript**

---

## 📂 Estrutura do Projeto (MVC)

```
podcast-uploader/
├── src/
│   ├── config/             # Configurações de terceiros (ex: multer)
│   ├── controllers/        # Lógica de requisições HTTP
│   ├── entities/           # Entidades do banco (ORM)
│   ├── routes/             # Rotas da aplicação
│   ├── services/           # Lógica de negócio
│   ├── database/           # Conexão TypeORM
│   ├── app.js              # Configuração do app Express
│   └── server.js           # Inicialização do servidor
├── uploads/                # Onde os arquivos de áudio são salvos
└── database.sqlite         # Banco de dados SQLite
```

---

## 🛠️ Instalação e Execução

```bash
# 1. Clone o projeto
git clone https://github.com/IgorSasaki/podcast-uploader.git
cd podcast-uploader

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
node src/server.js
```

---

## 🔄 Endpoints da API

### 🎧 Podcasts

- **Criar Podcast**

```http
POST /api/podcasts
Content-Type: application/json

{
  "name": "CodeCast",
  "description": "Podcast sobre programação e tecnologia.",
  "author": "Igor Sasaki"
}
```

- **Listar Podcasts**

```http
GET /api/podcasts
```

---

### 📤 Episódios

- **Enviar Episódio**

```http
POST /api/episodes
Content-Type: multipart/form-data

Campos:
- title: string
- description: string
- duration: number (em segundos)
- publishedAt: string (ex: 2025-06-04)
- podcastId: number
- audio: arquivo .mp3
```

- **Listar Episódios de um Podcast**

```http
GET /api/podcasts/:podcastId/episodes
```

---

## 📁 Acesso aos Arquivos de Áudio

Os arquivos enviados ficam disponíveis em:

```
http://localhost:3333/uploads/<nome-do-arquivo>
```

---

## 🧪 Testando com Postman

Você pode usar o Postman ou Insomnia para testar os endpoints. Basta configurar os métodos e body conforme descrito acima.

---

## 📌 Observações

- O projeto usa `synchronize: true` no TypeORM. Em produção, recomenda-se criar e gerenciar as migrations manualmente.
- Os arquivos são salvos localmente em `uploads/`. Para ambiente cloud, é recomendado migrar para S3 ou outro serviço de armazenamento.

---

## 📄 Licença

MIT

---

## 👨‍💻 Autor

**Igor Sasaki**  
[LinkedIn](https://www.linkedin.com/in/igor-sasaki)  
[GitHub](https://github.com/IgorSasaki)
