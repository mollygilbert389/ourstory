const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log(db.UserText)
    db.UserText
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.UserText
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("made it here: "+ JSON.stringify(req.body))
    db.UserText
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.UserText
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  newUser: function(req, res) {
    db.UserText
      .findOne(req.body)
      .then(dbModel => {
        //if the user has userText in Mongo then isNew is false
        var isNew = (dbModel) ? false : true;
        res.json(isNew);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.UserText
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  newTimer: function(req, res) {
    db.UserTimer
      .findOne(req.body)
      .then(dbModel => {
        //if the user has userText in Mongo then isNew is false
        var timerStart = (dbModel) ? false : true;
        res.json(timerStart);
      })
      .catch(err => res.status(422).json(err));
    }
  
};
