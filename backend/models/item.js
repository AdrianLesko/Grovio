import mongoose from 'mongoose'

const itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  }, 
  quantity: {
    type: Number,
    default: () => 1,
  },
  unit: {
    type: String,
    default: () => 'pc'
  },
  isBought: {
    type: Boolean,
    default: () => false
  }, 
  createdAt: {
    type: Date,
    default: () => Date.now()
  }
})


export default mongoose.model('Item', itemSchema)