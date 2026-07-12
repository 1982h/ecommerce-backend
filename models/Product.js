const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
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
    price:{ 
        type: Number,
        min: 0 
    },
    rating: {
      type: Number,
      min: 1,
      max: 10
    },
    sales: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
