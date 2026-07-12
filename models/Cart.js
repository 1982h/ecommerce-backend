const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },
    genre: {
      type: String,
      trim: true
    },
    totalprice: {
      type: Number,
      min: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);
