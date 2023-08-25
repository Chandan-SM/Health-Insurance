// Import necessary packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const RateData = require("./modal");

// Create an Express app
const app = express({
  cors: {
    origin: "*",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});
app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

// Set up a database connection using Mongoose
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Mongo-db connected!");
});

// Set up a route to handle rate data submission
app.post("/rateData", async (req, res) => {
  try {
    // Extract rate data from the request body
    const { member_csv, age_range, tier } = req.body;

    // Create a new rate data document
    const rateData = new RateData({
      member_csv,
      age_range,
      tier,
    });

    // Save the rate data to the database
    await rateData.save();

    // Send a success response
    res.status(200).send("Rate data saved successfully");
  } catch (err) {
    // Send an error response if something went wrong
    res.status(500).send("Error saving rate data: " + err.message);
  }
});

app.get("/rateData", async (req, res) => {
  const rateData = await RateData.find();
  res.status(200).send(rateData);
});

app.patch('/addtocart/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const existingData = await RateData.findById(id);

    if (!existingData) {
      return res.status(404).json({ message: 'Data not found' });
    }

    const updatedAddedStatus = !existingData.AddtoCart;
    existingData.AddtoCart = updatedAddedStatus;
    const updatedData = await existingData.save();

    res.status(200).json({ message: 'Added status updated', data: updatedData });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating added status' });
  }
});


app.post("/getPremium", async (req, res) => {
  const { memberType, tier, price } = req.body;

  try {
    const premiumData = await RateData.find({
      member_csv: memberType,
      tier: tier,
    });

    if (premiumData.length > 0) {
      const filteredData = premiumData.map((data) => ({
        ageRange: data.age_range,
        memberCsv: data.member_csv,
        tier: data.tier,
        sumInsured: data[price] || "Sum Insured not found",
        _id:data._id,
        addedTocart:data.AddtoCart
      }));

      res.status(200).json(filteredData);
    } else {
      res
        .status(404)
        .json({
          message: "Data not found for the specified member type and tier",
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching premium data" });
  }
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server started on port", process.env.PORT);
});
