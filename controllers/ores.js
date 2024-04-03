var ores = require('../models/ores');
// List of all ores
exports.cores_list = function(req, res) {
res.send('NOT IMPLEMENTED: ores list');
};
// for a specific ores.
exports.ores_detail = function(req, res) {
res.send('NOT IMPLEMENTED: ores detail: ' + req.params.id);
};
// Handle ores create on POST.
exports.ores_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: ores create POST');
};
// Handle ores delete from on DELETE.
exports.ores_delete = function(req, res) {
res.send('NOT IMPLEMENTED: ores delete DELETE ' + req.params.id);
};
// Handle ores update form on PUT.
exports.ores_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: ores update PUT' + req.params.id);
};
