const express = require("express");
const { getUserById, getCasesByUser } = require("./../controllers/");

const profileRouter = express.Router();

profileRouter.get("/:id/", getUserById);
profileRouter.get("/:id/cases", getCasesByUser);

module.exports = profileRouter;
