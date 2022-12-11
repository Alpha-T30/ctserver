const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sectors: {
    type: mongoose.SchemaTypes.Mixed,
    required: true,
  },
  isAgree: {
    type: mongoose.SchemaTypes.Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Candidate", candidateSchema);
