const { User } = require("./../../db/models/user");
const  Case  = require("./../../db/models/case");

// get user by id function
const getUserById = (req, res) => {
  const userId = req.params.id;
  User.findOne({ _id: userId })
    .then((result) => {
      res.status=200;
      res.json(result);
    })
    .catch((err) => {
      res.status=400;
      res.json(err);
    });
};

// get cases by user function
const getMyCases = (req, res) => {
  const userId = req.token.userId;
  Case.find({ userId: userId })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status=400;
      res.json(err);
    });
};

// get cases by user function
const getCasesByUser = (req, res) => {
  const userId = req.params.id;
  Case.find({ userId: userId })
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status=400;
      res.json(err);
    });
};

module.exports = {
  getUserById,
  getMyCases,
  getCasesByUser
};
