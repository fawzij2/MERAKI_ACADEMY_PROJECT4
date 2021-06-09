const Case = require("./../../db/models/case");

const createNewCase = (req, res) => {
  const { caseName, category, neededAmount, address, isPrivate, isClosed,userId } = req.body;

  const newCase = new Case({
    caseName,
    category,
    neededAmount,
    address,
    isPrivate,
    isClosed,
    userId
  });

  newCase
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400);
      res.json(err);
    });
};

const getAllCases = (req, res) => {
  Case.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

const getClosedCases = (req, res) => {
  Case.find({ isClosed: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

const updateCaseById = (req, res) => {
  const id = req.params.id;
  const updates= req.body;

  Case.findOneAndUpdate({_id:id},updates, {new: true} )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

const getCaseById = (req, res) => {
  const id = req.params.id;
  Case.findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

const deleteCaseById = (req, res) => {
  const id = req.params.id;

  Case.findByIdAndDelete(id)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Success Delete Case With ID => ${id}`,
      });
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

const getCasesByCategory = (req, res) => {
  const category = req.params.category;
  Case.find({ category: category })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

const getCasesByCategoryByDonationNeeded = (req, res) => {
  const category = req.params.category1;
  const donationNeeded = req.body.donationNeeded;
  const caseSorting = req.body.sorting;
  const caseName = req.body.caseName;
  if (caseSorting === "lowHigh"){
  Case.find({ category: category, neededAmount:{$lte: donationNeeded},caseName:{ "$regex": caseName, "$options": "i" } }).sort({neededAmount:1})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
  } else if(caseSorting === "highLow"){
    Case.find({ category: category, neededAmount:{$lte: donationNeeded},caseName:{ "$regex": caseName, "$options": "i" } }).sort({neededAmount:-1})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
  }
};

const getCasesByCategoryByDonationNeeded2 = (req, res) => {
  const category = req.params.category2;
  const DonationNeeded = req.body.donationNeeded;
  const caseSorting = req.body.sorting;
  const caseName = req.body.caseName;
  if (caseSorting === "lowHigh"){
  Case.find({ category: category, neededAmount:{$gte: DonationNeeded},caseName:{ "$regex": caseName, "$options": "i" } }).sort({neededAmount:1})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
  } else if(caseSorting === "highLow"){
    Case.find({ category: category, neededAmount:{$gte: DonationNeeded}, caseName:{ "$regex": caseName, "$options": "i" } }).sort({neededAmount:-1})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
  }
};

module.exports = {
  createNewCase,
  getAllCases,
  getClosedCases,
  updateCaseById,
  getCaseById,
  deleteCaseById,
  getCasesByCategory,
  getCasesByCategoryByDonationNeeded2,
  getCasesByCategoryByDonationNeeded
};
