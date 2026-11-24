import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true, 
    unique: true
  },
  passwordHash: {
    type: String, 
    required: true
  }
})

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v 
    delete ret.passwordHash
    void doc
  }
})

export default mongoose.model('User', userSchema)