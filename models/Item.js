const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: String,
  price: String,
  brand: String
})

mongoose.model('items', ItemSchema)
