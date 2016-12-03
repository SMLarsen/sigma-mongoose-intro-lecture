var express = require('express');
var router = express.Router();
// bring in our mongoose model
var Person = require('../models/person');
var XMasItem = require('../models/christmas.item');

console.log(1234);

router.put('/:id', function(req, res) {
  var wish = req.body.thing;
  var id = req.params.id;
  // console.log('add gift: ', id, wish);
  Person.update(
    { _id: id },
    { "$push": { "wishlist": { "thing": wish } } },
    function(err, data) {
      if(err) {
        console.log('Put ERR: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }

  );
});


module.exports = router;
