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

itemSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString(),
    delete ret._id,
    delete ret.__v
  }
})


export default mongoose.model('Item', itemSchema)