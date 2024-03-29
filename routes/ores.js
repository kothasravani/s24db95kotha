var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Ores', { title: 'Search Result Ores' });
});

module.exports = router;