const db = require("../models");
var Twit = require('twit')
var T = new Twit({
  consumer_key:         "d5E3eeuvqTcjRPtBUpgDdoKXp",
  consumer_secret:      "WTpYpPH1CfZvqodz7KzTGlTVJSBIgf3LirnHmDZhSMyhGdw2f6",
  access_token:          "1112155586106404864-hCxGfAMJw9J7eA66kfGCfVziqqFHpG",
  access_token_secret:  "4mjba3f25rz6jS9mLhxtcA8ufyM9wnyB8OkyLFg3AtiBE",
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

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
  tweeter: function(req, res) {
    db.UserText.count(function(err, result) {
      var r = Math.floor(Math.random() * result);
      db.UserText.find({}, function(error, found) {
        if (error) {
          console.log(error)
        } else {
          console.log(found)
          T.post('statuses/update', { status: found[r].UserText }, function(err, data, response) {
            console.log(data)
            res.json(data)
          })
        }
      })
    })
  },
  checkActive: function(req, res) {
    console.log(db.Queue)
    db.Queue
    .findById({ _id: "5cd0b97124420e002aea1472" })
      .then((dbModel) => {
        if (dbModel.active === false) {
          db.Queue.findByIdAndUpdate("5cd0b97124420e002aea1472", {"active": true})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
        } else {
          res.json(dbModel.active)
        }
      })
      .catch(err => res.status(422).json(err));
  },
  reset: function(req, res) {
    db.Queue.findByIdAndUpdate("5cd0b97124420e002aea1472", {"active": false})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  createcollection: function(req, res) {
    console.log("made it here: "+ JSON.stringify(req.body))
    db.Queue
      .create({"active": false})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

