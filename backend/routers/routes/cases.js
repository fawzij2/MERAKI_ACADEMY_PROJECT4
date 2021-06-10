const express = require("express");
const authentication = require("../middlewares/authentication");
const casesRouter = express.Router();
const {
  createNewCase,
  getAllCases,
  getClosedCases,
  updateCaseById,
  getCaseById,
  deleteCaseById,
  getCasesByCategory,
} = require("./../controllers/cases");

casesRouter.get("/", getAllCases);
casesRouter.get("/case/:id", getCaseById);
casesRouter.get("/closed", getClosedCases);
casesRouter.get("/categeories/:category", getCasesByCategory);
casesRouter.post("/categeories/:category", getCasesByCategory);
casesRouter.put("/case/:id", authentication, updateCaseById);
casesRouter.delete("/case/:id", authentication, deleteCaseById);
casesRouter.post("/create", authentication, createNewCase);

module.exports = casesRouter;
