var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuotesSchema = new Schema({
    name: {type: String, required: true, max: 100},
    quote: {type: String, required: true, max: 1000},
});


// Export the model
module.exports = mongoose.model('Quotes', QuotesSchema);