const express = require("express");
const graphqlHTTP = require('express-graphql')
const schema = require('./server-schema/schema')
const mongoose = require('mongoose')
const Mongo_URI = 'mongodb+srv://Kumail786:Rawjani123@cluster0-ayjpi.mongodb.net/bookshop'
const Port = 4000
const app = express();
//connecting to mongodb Atlas
mongoose.connect(Mongo_URI)
mongoose.connection.once('open',()=>{
  console.log("connected to mongdb")
})

//middleware
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(Port, () => {
  console.log("App is listening on port 4000");
});
