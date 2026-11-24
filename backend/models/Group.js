import mongoose from 'mongoose'

const GroupSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: true,
    trim:true,
  },
  connectionCode: {
    type: String,
    unique: true,
    required: true,
    uppercase: true, 
    trim: true, 
    index: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    index: true
  }],
  createdAt: {
    type: Date,
    default: () => Date.now()
  }
})

GroupSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v
  }
})


export default mongoose.model('Group', GroupSchema)