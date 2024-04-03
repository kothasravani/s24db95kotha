var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ores_controller = require('../controllers/ores');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// ores ROUTES ///
// POST request for creating a ores.
router.post('/ores', ores_controller.ores_create_post);
// DELETE request to delete ores.
router.delete('/ores/:id', ores_controller.ores_delete);
// PUT request to update ores.
router.put('/ores/:id', ores_controller.ores_update_put);
// GET request for one ores.
router.get('/ores/:id', ores_controller.ores_detail);
// GET request for list of all ores items.
router.get('/ores', ores_controller.ores_list);
module.exports = router;