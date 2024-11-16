/*import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js'; 

export const registerUser = async (req, res) => {
  try {
    await User.createUser(req.body);
    res.redirect('/login');
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);  // Log de erro específico
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar se os campos estão preenchidos
    if (!username || !password) {
      return res.status(400).json({ message: 'Usuário e senha são obrigatórios' });
    }

    const user = await User.findUserByUsername(username);

    // Verifica se o usuário existe
    if (!user) {
      console.log("Usuário não encontrado:", username);
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    // Verifica a validade da senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Senha incorreta para usuário:", username);
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    // Gera o token JWT
    const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/profile');
  } catch (error) {
    console.error("Erro ao fazer login:", error);  // Log de erro específico
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export const viewProfile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.redirect('/login');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findUserByUsername(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    res.render('profile', { user });
  } catch (error) {
    console.error("Erro ao visualizar perfil:", error);  // Log de erro específico
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
*/

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

export const registerUser = async (req, res) => {
  try {
    await User.createUser(req.body);
    res.redirect('/login');
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findUserByUsername(username);

    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/profile');
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export const viewProfile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.redirect('/login');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findUserByUsername(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }

    res.render('profile', { user });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
