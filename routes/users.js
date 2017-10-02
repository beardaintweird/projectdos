var express = require('express');
var router = express.Router();
const db    = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.user.findAll({
    include: [{
      model: db.question
    }]
  })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
});

module.exports = router;
