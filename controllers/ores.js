var ores = require('../models/ores');
// List of all ores
exports.ores_list = function(req, res) {
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

// List of all ores
exports.ores_list = async function(req, res) {
    try{
    theores = await ores.find();
    res.send(theores);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// VIEWS
// Handle a show all view
exports.ores_view_all_Page = async function(req, res) {
    try{
    theores = await ores.find();
    res.render('ores', { title: 'ores Search Results', results: theores });
    }
    catch(err){ 
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    // Handle ores create on POST.
exports.ores_create_post = async function(req, res) {
    console.log(req.body)
    let document = new ores();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"ores_type":"goat", "cost":12, "size":"large"}
    document.ore_name = req.body.ore_name;
    document.quality_level = req.body.quality_level;
    document.quantity_available = req.body.quantity_available;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
