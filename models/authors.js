const mongoose = require('mongoose')
const Scheme = mongoose.Schema;

const authorSchema = new Scheme({
    name: String,
    age : Number,
    

})

module.exports = mongoose.model("Author",authorSchema)