import mongoose from 'mongoose'

const UserImgSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
})

export default mongoose.model('ImageUploder', UserImgSchema)
