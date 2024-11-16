/*import express from 'express'; 
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';  // Importação das rotas do usuário

dotenv.config();
const app = express();

// Configuração do motor de visualização
app.set('view engine', 'html');

// Middleware para processar JSON e dados do formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração dos arquivos estáticos (CSS, JS)
app.use(express.static(path.join(path.resolve(), 'public')));

// Configuração do Cookie Parser para lidar com cookies
app.use(cookieParser()); 

// Configuração das rotas
app.use('/', userRoutes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});*/

import express from 'express'; 
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';  // Importação das rotas do usuário

dotenv.config();
const app = express();

// Configuração do motor de visualização
app.set('view engine', 'html');

// Middleware para processar JSON e dados do formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração dos arquivos estáticos (CSS, JS)
app.use(express.static(path.join(path.resolve(), 'public')));

// Configuração do Cookie Parser para lidar com cookies
app.use(cookieParser()); 

// Configuração das rotas
app.use('/', userRoutes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
