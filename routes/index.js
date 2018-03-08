var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
var dotenv = require("dotenv");

dotenv.config();
var url = process.env.MONGOLAB_URI;
//var url = process.env.MONGOLAB_URI;
//const AccessoryModel = require("../models/AccessoryModel");
//const MailModel = require("../models/MailModel.js");

/* Mongoose Setup */
//Set up default mongoose connection
mongoose.connect(url);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to db");
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


//const kitty = new Cat({ name: "Zildjian" });
//kitty.save().then(() => console.log("meow"));

/* GET accessories from db */
/**router.get("/dataAccessories", function (req, res) {
    AccessoryModel.find().then(function (doc) {
        console.log(doc);
        res.send(doc);
    });
});**/

/* Home pg*/
/**router.get("/:param", function(req,res){
  if([....,....,...].indexOf(req.params.param)===-1){
    res.send("parametro errado");
    return;
    }
})**/
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
