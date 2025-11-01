const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../Models/userModel');
const SECRET_KEY = process.env.JWT_SECRET || 'secretkey123';

// Registro de usuário
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email já cadastrado' });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = await User.create({ name, email, password: passwordHash });

        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1d' });

        return res.status(201).json({
            message: 'Usuário registrado com sucesso',
            user: { id: user.id, name: user.name, email: user.email },
            token
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

// Login de usuário
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ message: 'Email ou senha incorretos' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Email ou senha incorretos' });

        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1d' });

        return res.status(200).json({
            message: 'Login realizado com sucesso',
            user: { id: user.id, name: user.name, email: user.email },
            token
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
