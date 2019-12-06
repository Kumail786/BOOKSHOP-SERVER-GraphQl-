const express = require("express");
const graphqlHTTP = require('express-graphql')
const schema = require('./server-schema/schema')
const mongoose = require('mongoose')

const app = express();
//connecting to mongodb Atlas
mongoose.connect(process.env.mongo_URI)
mongoose.connection.once('open',()=>{
  console.log("connected to mongdb")
})

//middleware
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(process.env.Port, () => {
  console.log("App is listening on port 4000");
});
