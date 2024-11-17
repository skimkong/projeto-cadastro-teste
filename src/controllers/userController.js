import User from '../models/userModel.js';

export const registerUser = async (req, res) => {
    try {
        await User.createUser(req.body);
        res.redirect('/confirmation.html');
    } catch (error) {
        console.error('Erro no registro:', error);
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

        const isPasswordValid = await User.validatePassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        console.log(`Redirecionando para perfil com: username=${username}, email=${user.email}`);
        res.redirect(`/profile?username=${username}&email=${user.email}`);
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

export const viewProfile = async (req, res) => {
    try {
        const { username, email } = req.query;
        console.log(`Renderizando perfil com: username=${username}, email=${email}`);
        res.render('profile', { username, email });
    } catch (error) {
        console.error('Erro ao renderizar perfil:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
