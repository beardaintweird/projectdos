var express = require('express');
var router = express.Router();
const db    = require('../models');

router.get('/', (req,res) => {
  db.question.findAll()
    .then((questions) => {
      console.log(questions[0].dataValues);
      res.render('artest', {questions});
    })
    .catch(err=>res.status(500).json(err));
});

router.get('/:id', (req,res) => {
  db.question.findById(req.params.id)
    .then((question) => {
      question = question.dataValues
      res.render('question', {question})
    })
    .catch(err=>res.status(500).json(err));
})

module.exports = router;
