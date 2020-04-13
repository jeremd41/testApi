// Imports
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser =require('body-parser')
require("dotenv/config");

app.use(bodyParser.json())

//Import routes
const postsRoute = require("./routes/Posts");

// Routes
app.use("/posts", postsRoute);


app.get("/", function(req, res) {
  res.send("hello world !!!! ");
});

//Connect to DB
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("db is connect");
});

// Launch server*
app.listen(3000, function() {
  console.log("Le serveur est en route");
});