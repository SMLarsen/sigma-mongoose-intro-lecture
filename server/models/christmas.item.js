var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// subdocument
var christmasItem = new Schema({
  thing: { type: String, required: true }
});

var christmasItem = mongoose.model('christmasItem', christmasItem);

module.exports = christmasItem;
