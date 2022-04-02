import mongoose from 'mongoose'

const UserImgSchema = new mongoose.Schema({
  binary: {
    type: Buffer,
    required: [true, 'Please provide image'],
  },
})

export default mongoose.model('ImageUploder', UserImgSchema)
