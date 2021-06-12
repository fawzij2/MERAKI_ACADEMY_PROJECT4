const express = require("express");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const casesRouter = express.Router();
const {
  createNewCase,
  getAllCases,
  getClosedCases,
  updateCaseById,
  getCaseById,
  deleteCaseById,
  getCasesByCategory,
  closeCaseById
} = require("./../controllers/cases");

casesRouter.get("/", getAllCases);
casesRouter.get("/case/:id", getCaseById);
casesRouter.get("/closed", getClosedCases);
casesRouter.get("/categeories/:category", getCasesByCategory);
casesRouter.post("/categeories/:category", getCasesByCategory);
casesRouter.put("/case/:id", authentication, updateCaseById);
casesRouter.delete("/case/:id", authentication, deleteCaseById);
casesRouter.post("/create", authentication , createNewCase);
casesRouter.put("/case/closed/:id", authentication,authorization("Close_Case"), closeCaseById);


module.exports = casesRouter;
