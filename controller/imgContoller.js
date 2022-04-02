import UserImgSchema from '../model/userImage.js'
import { StatusCodes } from 'http-status-codes'

const createImg = async (req, res) => {
  try {
    const images = await UserImgSchema.create(req.body)
    // res.status(201).json({ images })
    console.log(images)
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
