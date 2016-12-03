var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var XMasItem = require('./christmas.item');

// console.log(XMasItem);
// subdocument
var christmasItem = new Schema({
  thing: { type: String, required: true }
});

// var christmasItem = mongoose.model('christmasItem', christmasItem);

// step 1: create the Schema
var personSchema = new Schema({
  name: {type: String, required: true},
  location: String,
  birthDate: Date,
  nicenessLevel: String,
  wishlist: [christmasItem]
});

personSchema.pre('save', function(next) {
  next();
});

// step 2 - create the model
var Person = mongoose.model('Person', personSchema);

// step 3 - export our model
module.exports = Person;
