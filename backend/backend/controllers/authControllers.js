const User = require('../models/User');
const { generateToken } = require('../config/auth');

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return res.status(400).json({ message: 'Utilisateur déjà existant' });
    }

    const user = new User({ email, password });
    await user.save();

    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Email ou mot de passe invalide' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login };
