const express = require('express');
const User = require('../models/User');
const { generateToken } = require('../config/auth');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/inscription', async (req, res, next) => {
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
});

router.post('/connexion', async (req, res, next) => {
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
});

router.post('/logout', authMiddleware, (req, res) => {
  res.json({ message: 'Déconnecté avec succès' });
});

module.exports = router;
