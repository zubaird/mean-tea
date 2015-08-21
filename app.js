var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require('method-override'),
morgan = require("morgan"),
db = require("./models");


app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

var apiRouter = express.Router();

/////////////// CHECKOUT PAGE ROUTES
apiRouter.route('/bag')
  .post(function(req,res){
    var newBag = db.Bag.create(req.body,function(err){
      if (err) {
        return res.send(err)
      }
      res.json({ message: 'Bag created!' });
    })
  })
  .get(function(req,res){
    db.Bag.find(function(err,bag){
      res.json(bag);
    })
  })

/////////////// TEA ROUTES

// CREATE AND INDEX
apiRouter.route('/teas')
  .post(function(req,res){
    var newTea = db.Tea.create(req.body,function(err){
      if (err) {
        return res.send(err)
      }
      res.json({ message: 'Tea created!' });
    })
  })
  .get(function(req,res){
    db.Tea.find(function(err,teas){
      res.json(teas);
    })
  })

// READ, UPDATE, DELETE
apiRouter.route('/teas/:_id')
  .get(function(req,res){
    db.Tea.findById(req.params,function(err,tea){
      if (err) res.send(err);
      res.json(tea);
    })
  })
  .put(function(req,res){
    db.Tea.findById(req.params,function(err,tea){

      if (err) res.send(err);

      tea.name = req.body.name;
      tea.ingredients = req.body.ingredients;
      tea.caffeineScale = req.body.caffeineScale;
      tea.price = req.body.price;
      tea.inStock = req.body.inStock;
      tea.rating = req.body.rating;
      tea.categories = req.body.categories;

      tea.save(function(err){
        if (err) res.send(err);
        res.json({message:'Tea updated'})
      })

    })
  })
  .delete(function(req,res){
    db.Tea.remove({_id:req.params._id}, function(err,tea){
      if (err) return res.send(err);
      res.json({ message: 'Tea successfully deleted' });
    })
  })

app.use('/api', apiRouter);

// ROOT
app.get('/', function(req,res){
  res.render('index.ejs');
});


PORT = 3000
app.listen(PORT,function(){
  console.log("server running on", PORT)
});

// function updateTea(tea,res,data) {
//   tea.name = req.body.name;
//   tea.ingredients = req.body.ingredients;
//   tea.caffeineScale = req.body.caffeineScale;
//   tea.price = req.body.price;
//   tea.inStock = req.body.inStock;
//   tea.rating = req.body.rating;
//   tea.categories = req.body.categories;
//   tea.save(function(err){
//     if (err) res.send(err);
//     res.json(message:'Tea updated')
//   })
// }
