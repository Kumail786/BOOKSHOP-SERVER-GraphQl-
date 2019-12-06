const mongoose = require('mongoose')
const Scheme = mongoose.Schema;

const bookSchema = new Scheme({
    name: String,
    genre : String,
    authorId : String,

})

module.exports = mongoose.model("Book",bookSchema)