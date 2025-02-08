const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./backend/routes/authRoutes');
const productRoutes = require('./backend/routes/productRoutes');
const errorMiddleware = require('./backend/middleware/errorMiddleware');

dotenv.config();

mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Connecté à la base de donnée'))
  .catch((error) => console.log('Erreur de connexion à la base de donnée:', error));

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5099;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
