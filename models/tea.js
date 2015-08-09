var mongoose = require("mongoose");

var teaSchema = new mongoose.Schema({
                    name: { type: String, required: true, trim: true },
                    tastingNotes: String,
                    ingredients: String,
                    caffeineScale: Number,
                    price: Number,
                    inStock: Boolean,
                    categories: [],
                    rating: Number,
                    imageUrl: String
                });
function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
    // ,set: setPrice
}

var Tea = mongoose.model("tea", teaSchema);

module.exports = Tea;
