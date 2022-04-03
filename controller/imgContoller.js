import UserImgSchema from '../model/userImage.js'
import { StatusCodes } from 'http-status-codes'

const createImg = async (req, res) => {
  // console.log(req.file.file)
  try {
    let images = req.file ? req.file.file : null
    console.log(images)
    const dataImg = await UserImgSchema.create(images)

    // await dataImg.save()
    console.log(dataImg)
    res.status(StatusCodes.OK).json({ image: dataImg })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'there was an error' })
  }

  // res.status(StatusCodes.CREATED).json({ name, src })
  // res.send(`images created`)
}

const getAllImgs = async (req, res) => {
  res.send('get all images')
}

const deleteImg = async (req, res) => {
  res.status('img deleted')
}

export { createImg, getAllImgs, deleteImg }
