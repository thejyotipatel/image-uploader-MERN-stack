import UserImgSchema from '../model/userImage.js'
import { StatusCodes } from 'http-status-codes'

const createImg = async (req, res, next) => {
  try {
    const images = await UserImgSchema.create({
      filePath: req.file.filename,
      fileName: req.file.originalname,
    })
    console.log(images)

    await images.save()

    res.status(StatusCodes.OK).json({ images })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error })
  }
}

export { createImg, getAllImgs, deleteImg }
