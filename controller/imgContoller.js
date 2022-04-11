import UserImgSchema from '../model/userImage.js'
import { StatusCodes } from 'http-status-codes'

const createImg = async (req, res, next) => {
  try {
    const images = await UserImgSchema.create({
      filePath: req.file.filename,
      fileName: req.file.originalname,
    })
    // console.log(images)

    await images.save()

    res.status(StatusCodes.OK).json({ images })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getImg = async (req, res, next) => {
  try {
    const images = await UserImgSchema.find({})
    const image = images[0]
    res.status(StatusCodes.OK).json({ image })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export { createImg, getImg }
