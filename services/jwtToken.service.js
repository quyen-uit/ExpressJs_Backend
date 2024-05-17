const jwt = require("jsonwebtoken");
const secretkey = process.env.JWT_SECRETKEY;

const generateToken = (userId) => {
  return jwt.sign(userId, secretkey, { expiresIn: "2d" });
};

module.exports = { generateToken };
