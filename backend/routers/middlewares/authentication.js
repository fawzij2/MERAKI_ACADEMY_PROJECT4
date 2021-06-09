
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secret = process.env.SECRET;

const authentication = (req, res, next) => {
  console.log("req.headers.authorization"+req.headers.authorization);
  if (!req.headers.authorization) {
    res.status(403).json({ message: "forbidden" });
  }
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  jwt.verify(token, secret, (err, result) => {
    if (err) {
      return res.status(403).json({ message: "forbidden" });
    }
    if (result) {
      req.token = result;
      next();
    }
  });
};

module.exports = authentication;

