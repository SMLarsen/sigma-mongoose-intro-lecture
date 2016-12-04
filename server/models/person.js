var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var XMasItem = require('./christmas.item');

// christmas list subdocument schema
var christmasItem = new Schema({
    thing: {
        type: String,
        required: true
    }
});

// person schema
var personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: String,
    birthDate: Date,
    nicenessLevel: String,
    wishlist: [christmasItem]
});

personSchema.pre('save', function(next) {
    next();
});

// sPerson model
var Person = mongoose.model('Person', personSchema);

// Export model
module.exports = Person;
