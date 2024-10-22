const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['basic', 'premium'], required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);