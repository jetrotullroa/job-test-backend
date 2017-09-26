const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: 'Please provide an item name.'
  },
  Price: {
    type: String,
    required: "Please provide an amount"
  },
  Brand: {
    type: String,
    required: "Please provide the brand name."
  }
})

mongoose.model('items', ItemSchema)
