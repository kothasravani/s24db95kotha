var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Ores', { title: 'Search Result Ores' });
});

module.exports = router;

var express = require('express');
const ores_controlers= require('../controllers/ores');
var router = express.Router();
/* GET ores */
router.get('/', ores_controlers.ores_view_all_Page );
/* GET detail costume page */
router.get('/detail', ores_controlers.ores_view_one_Page);
module.exports = router;
