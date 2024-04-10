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
    // {"ores_type":"goat", "quality_level":12, "quantity_available":"large"}
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
    
    // for a specific ores.
exports.ores_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await ores.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

// Handle ores update form on PUT.
exports.ores_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await ores.findById( req.params.id)
// Do updates of properties
if(req.body.ore_name)
toUpdate.ore_name = req.body.ore_name;
if(req.body.quality_level) toUpdate.quality_level = req.body.quality_level;
if(req.body.quantity_available) toUpdate.quantity_available = req.body.quantity_available;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
    
// Handle ores delete on DELETE.
exports.ores_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await ores.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
    // Handle a show one view with id specified by query
exports.ores_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
    result = await ores.findById( req.query.id)
    res.render('oresdetail', { title: 'ore Details', toShow: result }); // Pass 'result' as 'toShow'
  }
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a ores.
// No body, no in path parameter, no query.
// Does not need to be async
exports.ores_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('orescreate', { title: 'ores Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for updating a ores.
// query provides the id
exports.ores_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await ores.findById(req.query.id)
    res.render('oresupdate', { title: 'ores Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };