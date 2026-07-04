import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
    unique: true
  },
  ownerName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  activeUsers: {
    type: Number,
    default: 0
  }
})

export default mongoose.model('Room', roomSchema)