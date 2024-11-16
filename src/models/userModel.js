/*import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import { createUser, findUserByUsername } from '../models/userModel.js';


// Caminho para o arquivo JSON que armazenará os usuários
const usersFilePath = path.join(path.resolve(), 'src', 'config', 'db.json');

// Função para carregar usuários do arquivo JSON
const getUsers = async () => {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(data).users || [];
  } catch (error) {
    console.error("Erro ao carregar usuários:", error);
    return [];
  }
};

// Função para salvar usuários no arquivo JSON
const saveUsers = async (users) => {
  try {
    const data = { users };
    fs.writeFileSync(usersFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Erro ao salvar usuários:", error);
  }
};

// Função para criar um novo usuário
export const createUser = async (user) => {
  const users = await getUsers();
  user.password = await bcrypt.hash(user.password, 10);
  users.push(user);
  await saveUsers(users);
};

// Função para encontrar usuário pelo nome de usuário
export const findUserByUsername = async (username) => {
  const users = await getUsers();
  return users.find((user) => user.username === username);
};
*/

import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

// Caminho para o arquivo JSON onde os dados dos usuários são armazenados
const usersFilePath = path.join(path.resolve(), 'src', 'config', 'db.json');

// Função para carregar usuários do arquivo JSON
const getUsers = async () => {
  try {
    if (!fs.existsSync(usersFilePath)) {
      return []; // Retorna uma lista vazia se o arquivo não existir
    }
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(data).users || [];
  } catch (error) {
    console.error("Erro ao carregar usuários:", error);
    return [];
  }
};

// Função para salvar usuários no arquivo JSON
const saveUsers = async (users) => {
  try {
    const data = { users }; // Formato dos dados no JSON
    fs.writeFileSync(usersFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Erro ao salvar usuários:", error);
  }
};

// Função para criar um novo usuário
const createUser = async (user) => {
  const users = await getUsers();
  user.password = await bcrypt.hash(user.password, 10);
  users.push(user); // Adiciona o novo usuário à lista
  await saveUsers(users);
};

// Função para encontrar um usuário pelo nome de usuário
const findUserByUsername = async (username) => {
  const users = await getUsers();
  return users.find((user) => user.username === username);
};

// Exportação padrão do módulo
export default { createUser, findUserByUsername };


