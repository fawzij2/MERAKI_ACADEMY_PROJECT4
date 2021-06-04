const express = require("express");

const { register } = require("./../../controllers/register");

const createUser = express.Router();

createUser.post("/",register);

module.exports = createUser;
