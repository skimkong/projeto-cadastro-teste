/*import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
export default router;*/

/*import express from 'express';
import { registerUser, loginUser, viewProfile } from '../controllers/userController.js';
const router = express.Router();

// Rota de registro
router.post('/register', registerUser);

// Rota de login
router.post('/login', loginUser);

// Rota para exibir o perfil do usuário
router.get('/profile', viewProfile);

export default router;
*/
import path from'path';
import express from 'express';
import { registerUser, loginUser, viewProfile } from '../controllers/userController.js';
const router = express.Router();

// Rota para exibir a página de login (GET)
router.get('/login', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public', 'login.html'));
});

// Rota para exibir a página de registro (GET)
router.get('/register', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public', 'register.html'));
});

// Rota de registro (POST)
router.post('/register', registerUser);

// Rota de login (POST)
router.post('/login', loginUser);

// Rota para exibir o perfil do usuário (GET)
router.get('/profile', viewProfile);

export default router;
