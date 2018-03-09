var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FightSchema = new Schema({
    us1: {type: String, required: true},
    us2:{type: String, required: true},
    likes1:{type: Number, required: true},
    likes2:{type: Number, required: true},
    winnerFight:{type:String, required:true},
}, {collection: "fights"});

const FightModel = mongoose.model("Fight", FightSchema);

module.exports = FightModel;