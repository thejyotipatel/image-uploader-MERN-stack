import mongoose from 'mongoose'

const UserImgSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'image',
    maxlength: 50,
    trim: true,
  },
  img: {
    type: String,
    default: 'image',
  },
})

export default mongoose.model('ImageUploder', UserImgSchema)
