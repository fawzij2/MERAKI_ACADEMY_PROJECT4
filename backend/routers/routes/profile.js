const express = require("express");
const authentication = require("../middlewares/authentication");
const { getUserById, getMyCases, getCasesByUser } = require("./../controllers/profile");

const profileRouter = express.Router();


// profileRouter.get("/:id", getUserById);
profileRouter.get("/cases",authentication, getMyCases);
profileRouter.get("/:id/cases", getCasesByUser);

module.exports = profileRouter;
