const mongoose = require("mongoose")
const oresSchema = mongoose.Schema({
    ore_name: {
        type: String,
        required: [true, "ore_name is required"],
        minlength: [4, "ore_name should be at least 4 characters long"],
        maxlength: [9, "ore_name should be less than 8 characters long"]
      },
      quality_level: String,
      quantity_available: {
        type: Number,
        min: [3, "quantity_available must be at least 3"],
        max: [2000, "quantity_available cannot be greater than 2000"]
      }
})
module.exports = mongoose.model("Ores",
oresSchema)