var _ = require('underscore');
var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/mean-tea-db', function() {

    // Load Mongoose models
    seeder.loadModels([
        'models/tea.js',
    ]);

    // Clear specified collections
    seeder.clearModels(['tea'], function() {

    // Callback to populate DB once collections have been
    seeder.populateModels(data);

    });
});

// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'tea',
        'documents': createTeas()
    }
];

function createTeas() {
  var teas = []
  for (var i = 0; i < 10; i++) {
    var tea = {
      'name': randomName(),
      'ingredients': randomIngredients(),
      'caffeineScale': randomCaffeine(),
      'price': randomPrice(),
      'inStock': true,
      'categories': randomCategories(),
      'rating': randomRating(),
      'imageUrl': randomImage()
    }
    teas.push(tea);
  }
  return teas;
}

function randomPrice() {
  return Math.floor((Math.random()*100 + 1).toFixed(2)*100)
}

function randomRating() {
  return Math.floor((Math.random()*5))
}

function randomCaffeine() {
  return Math.floor((Math.random()*300) + 1)
}

function randomIngredients() {
  ingList = [
    "allspice",
    "aligator tongue",
    "acorns",
    "bee honey",
    "botox",
    "beans",
    "barley",
    "beef",
    "bourbon",
    "blarney",
    "beetle nut",
    "bay leaf",
    "cactus",
    "cream of wheat",
    "cream of tartar",
    "cream of mushroom",
    "cream of cream",
    "cream of 'cream of cream'",
    "cream of 'cream of 'cream of cream''",
    "cream",
    "cake",
    "corn",
    "cattle thorn",
    "deer antler",
    "dream spice",
    "door knob",
    "dark ember",
    "dill",
    "egg",
    "enzymes",
    "emotions",
    "essence of vanilla",
    "elemeno-P",
    "eggplant",
    "extra virgin olive oil",
    "flavorings",
    "fennel",
    "flax seeds",
    "fresco",
    "guava",
    "gelled caviar",
    "heroku",
    "honey",
    "hot sauce",
    "hooli",
    "horseradish",
    "ice",
    "ice cream",
    "iron",
    "irony",
    "ironic fiber",
    "intensified butter",
    "jewelry",
    "jamaican scotch bonnet",
    "jaguar leaf",
    "kale",
    "kitchen scraps",
    "lettuce",
    "lysol flavoring",
    "lawn clippings",
    "lye",
    "mint",
    "mitochondria",
    "nutmeg leaves",
    "opal",
    "oprah chai substitute plant",
    "orange blossom",
    "old sock",
    "persimon",
    "parsley",
    "pepper",
    "purina chow",
    "quinine",
    "quintin terranino plant extract",
    "quality tallow",
    "red pepper",
    "raw mashed potato",
    "raw mineral water",
    "roasted mushrooms",
    "succulents",
    "tumeric",
    "toast",
    "concentrated gluten",
    "heart of basil",
    "snapple tea powder"
  ]
  var ingredients = _.take(_.shuffle(ingList), ( (Math.random()*7) + 1 ) );
  return ingredients.join(', ')
}

function randomCategories() {
 var categories = [
   "awesome",
   "lucid",
   "summer",
   "winter",
   "spring",
   "hot",
   "cold",
   "warm",
   "dry",
   "dark",
   "light"
 ]
 return _.take(_.shuffle(categories), ( (Math.random()*3) + 1 ) );
}

function randomImage(){
  var randomImages = [
    "http://s7d5.scene7.com/is/image/Teavana/30131_d?$cimg$",
    "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
    "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
    "http://s7d5.scene7.com/is/image/Teavana/10004668_d?$cimg$",
    "http://s7d5.scene7.com/is/image/Teavana/31325_d?$cimg$",
    "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
    "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
    "http://s7d5.scene7.com/is/image/Teavana/31357_d?$cimg$",
    "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
    "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$"
  ]
  var randomImg = _.take(_.shuffle(randomImages), 1 );
  return randomImg;
}

function randomName() {
  var firstNames = [
  'pulpier',
  'baccate',
  'bayard',
  'factorially',
  'perm',
  'unwearing',
  'thirstlessness',
  'requisitionist',
  'disseisee',
  'oldfangled',
  'larisa',
  'unproportionable',
  'caudillo',
  'diacid',
  'isoniazid',
  'procrastinator',
  'gherkin',
  'topflighter',
  'pressor',
  'bandits',
  'frontlessness',
  'mercery',
  'panier',
  'camshaft',
  'flexner',
  'greisen',
  'reposal',
  'prevenient',
  'masonite',
  'devoutly',
  'valetudinary',
  'pinsetter',
  'creakiness',
  'inter',
  'desalinizing',
  'snugging',
  'cooking',
  'unbustling',
  'unsetting',
  'garden',
  'bibliogenesis',
  'incompactness',
  'midnight',
  "corinthian",
  "udon",
  "purple",
  "questionable",
  "angular",
  "platypus"
  ]

  var drinkTypes = [
    "black tea",
    "green tea",
    "white tea",
    "thorn tea",
    "veggie tea",
    "tisane tea",
    "herb tea",
    "drink",
    "elixir",
    "malt",
    "extract",
    "leaves",
    "leaf",
    "powder",
    "mix",
    "syrup",
    "oil",
    "stew"
  ]

  var firstName = _.take(_.shuffle(firstNames), 1 );
  var capitalizedName = firstName[0].charAt(0).toUpperCase() + firstName[0].slice(1);
  var drinkType = _.take(_.shuffle(drinkTypes), 1 );
  return capitalizedName + " " + drinkType;
}
