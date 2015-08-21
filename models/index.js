var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mean-tea-db");

mongoose.set("debug", true);

module.exports.Tea = require("./tea");
module.exports.Bag = require("./bag");
