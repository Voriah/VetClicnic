// Require all models
var db = require("../models")

module.exports = {
  findAll: function(req,res) {
    db.Medicine.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findWhere: function(req, res) {
    db.Medicine
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Medicine
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Medicine
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUpdate: function(req,res) {
    // body has an article
    let medicine = req.body
    // Create or Update
    db.Medicine.findOne({ pubId: { $eq: medicine.name } })
      .then((r) => {
        if (r === null) {
         // create 
         db.Medicine.create(medicine)
           .then(() => res.sendStatus(200))
           .catch(err => res.status(422).json(err))
       } else {
         // Update 
         db.Medicine.updateOne( { name : { $eq: medicine.name} } , { $set: medicine } )
           .then(() => res.sendStatus(200))
           .catch(err => res.status(422).json(err))
       }
    })
    .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    db.Medicine
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Medicine
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}