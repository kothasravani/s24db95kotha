var express = require("express");
const ores_controlers = require("../controllers/ores");
var router = express.Router();
const passport = require('passport');
// GET ores
router.get("/", ores_controlers.ores_view_all_Page);
module.exports = router;

// A little function to check if we have an authorized user and continue on 
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

// GET request for one ores.
router.get('/ores/:id', ores_controlers.ores_detail);

// PUT request to update a ores.
router.put('/ores/:id', ores_controlers.ores_update_put);

/* GET detail ores page */
router.get('/detail', ores_controlers.ores_view_one_Page);

/* GET create ores page */
router.get('/create', ores_controlers.ores_create_Page);

/* GET delete ores page */
router.get('/delete', ores_controlers.ores_delete_Page);
 
 /* GET update ores page */
router.get('/update', secured, 
ores_controlers.ores_update_Page);

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
   });

module.exports = router;