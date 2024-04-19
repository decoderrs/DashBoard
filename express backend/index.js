const mongoose = require("mongoose");
const express = require("express");
var config = require("./config.js");

url = config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log(`Connected correctly ot server ${db}`)
}, (err) => console.log(err));


var apiCountryRouter = require('./Routes/apicountry.js');

var app = express();

app.use(express.json());

app.use('/api', apiCountryRouter);

app.listen(3001, () => console.log(`Server Started at ${3001}`));