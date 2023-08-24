// Import necessary packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require('body-parser');
// const cron = require('node-cron');
// const axios = require('axios');

// Create an Express app
const app = express(
  {cors:{origin:"*",
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true}}
);

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
  ages: Number,
  sumInsured: Number,
  cityTier: String,
  tenure: String,
  premium: Number
});
mongoose.connect(`${process.env.MONGO_URI}`,{ useNewUrlParser :true})
// Assuming your rates are stored in a rates.js file
const rates = require('./rates');

app.post('/calculate-premium', (req, res) => {
  const { ages, sumInsured, cityTier, tenure } = req.body;
  
  // Implement your logic to calculate the premium based on the provided data
  const premium = calculatePremium(ages, sumInsured, cityTier, tenure);
  
  res.json({ premium });
});

// Example calculation function (you need to adapt this to your logic)
function calculatePremium(ages, sumInsured, cityTier, tenure) {
  // Use the rates data and input parameters to calculate premium
  // You can access the rates like rates[ageRange][cityTier][sumInsured][tenure]
  // Implement your premium calculation logic here
  
  return calculatedPremium;
}


const User = mongoose.model('User', userSchema);

app.post('/calculate-premium', async (req, res) => {
  const { ages, sumInsured, cityTier, tenure } = req.body;
  
  // Calculate the premium
  const premium = calculatePremium(ages, sumInsured, cityTier, tenure);

  // Store the user and premium data in the database
  const user = new User({
    ages,
    sumInsured,
    cityTier,
    tenure,
    premium
  });
  
  try {
    await user.save();
    res.json({ premium });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save user data' });
  }
});


mongoose.set("strictQuery", false);

// Set up a database connection using Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo-db connected!");
  })

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server started on port", process.env.PORT);
});