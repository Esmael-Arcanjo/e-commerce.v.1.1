# Todas dependencias do backend 
1. Node.js e Isso cria o package.json padrão. ambiente principal--npm init -y
2. Instalar o Express (framework HTTP) npm install express
3. MySQL  → banco de dados relacional
4. Sequelize  para facilitar consultas
5. bcrypt → criptografia de senhas
6. jsonwebtoken (JWT) → autenticação por token
7. cors → permitir requisições do frontend
8. dotenv → variáveis de ambiente
9. multer → upload de imagens (produtos, perfil)
10. nodemailer → envio de e-mails (recuperação de senha, notificações)
11. express-validator → validação de dados
12. morgan → logs de requisições (opcional para dev)
13. nodemon → reinício automático durante dev


npm init -y
Isso cria o package.json padrão.

2️⃣ Instalar o Express (framework HTTP)
npm install express

3️⃣ Instalar MySQL (driver para Node.js)
npm install mysql2
O mysql2 é compatível com Sequelize e oferece melhor performance.

4️⃣ Instalar Sequelize (ORM para MySQL)
npm install sequelize
npm install sequelize-cli --save-dev
npx sequelize-cli init --- ela cria o seeder e o migratorio

5️⃣ Instalar bcrypt (criptografia de senhas)
npm install bcryptjs

6️⃣ Instalar jsonwebtoken (JWT) (autenticação por token)
npm install jsonwebtoken

7️⃣ Instalar cors (permitir requisições do frontend)
npm install cors

8️⃣ Instalar dotenv (variáveis de ambiente)
npm install dotenv
Crie um arquivo .env na raiz para guardar senhas, chaves, etc.

9️⃣ Instalar multer (upload de imagens)
npm install multer

1️⃣0️⃣ Instalar nodemailer (envio de e-mails)
npm install nodemailer

1️⃣1️⃣ Instalar express-validator (validação de dados)
npm install express-validator

1️⃣2️⃣ Instalar morgan (logs de requisições, opcional)
npm install morgan

1️⃣3️⃣ Instalar nodemon (reinício automático durante dev)
npm install nodemon --save-dev




mysql-workbench-community




backend/
│
├── server.js                # seu arquivo principal
├── Routes/
│   ├── index.js             # junta todas as rotas
│   ├── auth.routes.js       # login/cadastro
│   ├── users.routes.js      # rotas de usuário
│   ├── listings.routes.js   # anúncios/produtos
│   └── orders.routes.js     # compras/pedidos
│
├── Controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── listingController.js
│   └── orderController.js
│
├── Models/
│   ├── userModel.js
│   ├── listingModel.js
│   ├── orderModel.js
│   └── categoryModel.js
│
├── Config/
│   ├── db.js                # conexão com banco (Postgres, Mongo, etc)
│   └── storage.js           # config de uploads (AWS S3, local etc)
│
├── Middleware/
│   ├── authMiddleware.js    # valida token JWT
│   └── errorHandler.js
│
├── Utils/
│   ├── token.js             # geração/verificação JWT
│   ├── email.js             # envio de e-mail de verificação/reset
│   └── helpers.js
│
└── package.json
