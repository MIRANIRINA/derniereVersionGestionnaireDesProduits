const jwt = require('jwt-simple');
const dotenv = require('dotenv');
dotenv.config();

const generateToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.encode(payload, process.env.JWT_SECRET);
};

module.exports = { generateToken };
