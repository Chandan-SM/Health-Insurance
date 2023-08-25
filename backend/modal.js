const mongoose = require('mongoose');

// Define a schema for the rate data
const rateDataSchema = new mongoose.Schema({
    500000: String,
    700000: String,
    1000000: String,
    1500000: String,
    2000000: String,
    2500000: String,
    3000000: String,
    4000000: String,
    5000000: String,
    6000000: String,
    7500000: String,
    member_csv: String,
    age_range: String,
    tier: String,
    AddtoCart:Boolean,
});
  
// Create a model for the rate data
const rateData = mongoose.model('RateData', rateDataSchema);

module.exports = rateData