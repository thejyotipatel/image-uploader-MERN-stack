import UserImgSchema from '../model/userImage.js'
import { StatusCodes } from 'http-status-codes'

const createImg = async (req, res, next) => {
  try {
    const images = await UserImgSchema.create({
      fileName: req.file.filename,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
    })
    console.log(images)

    await images.save()

    res.status(StatusCodes.OK).json({ images })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error })
  }
}

const getAllImgs = async (req, res, next) => {
  const images = await UserImgSchema.find({})
  console.log(images)
  res.status(StatusCodes.OK).json({ images })
}

const deleteImg = async (req, res) => {
  res.status('img deleted')
}

export { createImg, getAllImgs, deleteImg }
