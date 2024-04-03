const mongoose = require("mongoose")
const oresSchema = mongoose.Schema({
ore_name: String,
quality_level: String,
quantity_available: Number
})
module.exports = mongoose.model("Ores",
oresSchema)