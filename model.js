const mongoose = require("mongoose")
const footballschema = new mongoose.Schema(
    {
        name:String,
        photo:String,
        age:String,
        form:String,
        playing:String
    }
)

module.exports = mongoose.model("footballs",footballschema)