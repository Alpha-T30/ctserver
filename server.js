require("dotenv").config();
const express = require("express");
const app = express();
const Candidate = require("./models/candidate");

const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// getting the sectors

app.get("/getcandidate", async (req, res) => {
  console.log("helo");
  const candidate = await Candidate.find();
  if (!candidate)
    return res.status(204).json({ message: "No candidate found" });
  res.json(candidate);
});

// //creating sectors

app.post("/createcandidate", async (req, res) => {
  if (!req?.body?.name || !req?.body?.sectors || !req.body.isAgree) {
    return res.status(400).json({ message: "Every filds are required" });
  } else {
    try {
      const result = await Candidate.create({
        name: req.body.name,
        sectors: req.body.sectors,
        isAgree: req.body.isAgree,
      });

      res.status(201).json(result);
    } catch (err) {
      console.error(err);
    }
  }
});
//updating sectors

app.patch("/updatecandidate/:id", async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({ message: "ID parameter is required." });
  } else {
    const candidate = await Candidate.findOne({ _id: req?.params?.id }).exec();
    if (!candidate) {
      return res
        .status(204)
        .json({ message: `No candidate matches ID ${req.body.id}.` });
    } else {
      if (req.body?.name) candidate.name = req.body.name;
      if (req.body?.sectors) candidate.sectors = req.body.sectors;
      if (req.body?.isAgree) candidate.isAgree = req.body.isAgree;
      const result = await candidate.save();
      res.json(result);
    }
  }
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
