var mongoose = require("mongoose");

var bagSchema = new mongoose.Schema({
                    items: []
                });

var Bag = mongoose.model("bag", bagSchema);

module.exports = Bag;
