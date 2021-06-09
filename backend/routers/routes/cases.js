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
  getCasesByCategoryByDonationNeeded,
  getCasesByCategoryByDonationNeeded2
} = require("./../controllers/cases");

casesRouter.get("/", getAllCases);
casesRouter.get("/case/:id", getCaseById);
casesRouter.get("/closed", getClosedCases);
casesRouter.get("/categeories/:category", getCasesByCategory);
casesRouter.get("/categeories/:category1",getCasesByCategoryByDonationNeeded);
casesRouter.get("/categeories/:category2",getCasesByCategoryByDonationNeeded2)
casesRouter.put("/case/:id", authentication, updateCaseById);
casesRouter.delete("/case/:id", authentication, deleteCaseById);
casesRouter.post("/create", authentication, createNewCase);

module.exports = casesRouter;
