

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: { type: String, required: true, maxlength: 128 },
  location: { type: String, required: true },
  jobTitle: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true},
  endDate: { type: Date },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  category:{ type: String, required: true },
  logoUrl:{ type: String, required: true },
  organization:{ type: String, required: true },
  techUsed:{ type: String, required: true },
  website:{ type: String, required: true }
})

module.exports = mongoose.model('Portfolio', portfolioSchema);
