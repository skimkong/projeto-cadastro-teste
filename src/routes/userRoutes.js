import path from 'path';
import express from 'express';
import { registerUser, loginUser, viewProfile } from '../controllers/userController.js';
const router = express.Router();

// Rota para exibir a página de login (GET)
router.get('/login.html', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'public', 'login.html'));
});

// Rota para exibir a página de registro (GET)
router.get('/register.html', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'public', 'register.html'));
});

// Rota para exibir a página de confirmação (GET)
router.get('/confirmation.html', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'public', 'confirmation.html'));
});

// Rota de registro (POST)
router.post('/register', registerUser);

// Rota de login (POST)
router.post('/login', loginUser);

// Rota para exibir o perfil do usuário (GET)
router.get('/profile', viewProfile);

export default router;
