const mongoose = require('mongoose');
const { Schema } = mongoose;

const mongoosePaginate = require('mongoose-paginate');

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

ItemSchema.plugin(mongoosePaginate)

mongoose.model('items', ItemSchema)
