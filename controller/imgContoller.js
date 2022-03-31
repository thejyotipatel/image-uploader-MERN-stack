import UserImgSchema from '../model/userImage.js'
import { StatusCodes } from 'http-status-codes'

const createImg = async (req, res) => {
  const { name, src } = req.body
  res.status(StatusCodes.CREATED).json({ name, src })
  res.send(`images created`)
}

const getAllImgs = async (req, res) => {
  res.status('get all images')
}
const deleteImg = async (req, res) => {
  res.status('img deleted')
}

export { createImg, getAllImgs, deleteImg }
