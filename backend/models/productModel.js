const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'A product must have a description']
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price']
  },
  image: {
    type: String,
    required: [true, 'A product must have an image']
  },
  category: {
    type: String,
    required: [true, 'A product must have a category'],
    enum: ['supplements', 'equipment', 'accessories']
  },
  inStock: {
    type: Number,
    required: [true, 'Stock quantity is required'],
    min: 0
  },
  brand: {
    type: String,
    required: [true, 'Product must have a brand']
  },
  originalId: {
    type: String,
    unique: true
  },
  variants: {
    type: [String],
    default: []
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  mrp: {
    type: Number,
    required: [true, 'Product must have an MRP']
  },
  tag: {
    type: String,
    required: [true, 'Product must have a tag']
  },
  group: {
    type: String,
    enum: ['strength', 'gain', 'balance', 'all'],
    required: [true, 'Product must have a group']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);