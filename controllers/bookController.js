const db = require("../models");
var Twit = require('twit')
var T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:          process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
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
<<<<<<< HEAD

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
  
=======
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
          })
        }
      })
    });
    console.log(res)
  }
>>>>>>> eac6f76398f0e6522b6b4d4272d959e506f0b53c
};

