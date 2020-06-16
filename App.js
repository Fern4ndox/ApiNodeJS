var express = require("express");
const { Router } = require("express");
    app = express();
    bodyParser = require('body-parser');
    methodOverride = require('method-override');
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res)
{
    res.send("Hello World!");
});

app.use(router);
//Add new URL parser and UnifiedTopology on versión > 4.0 of Mongo
mongoose.connect('mongodb://localhost/tvshows', { useNewUrlParser: true, useUnifiedTopology: true } , function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});
