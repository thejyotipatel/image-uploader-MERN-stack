import mongoose from 'mongoose'

const UserImgSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  fileSize: {
    type: String,
    required: true,
  },
})

export default mongoose.model('ImageUploder', UserImgSchema)
