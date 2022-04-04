import express from 'express'
const router = express.Router()
import multer from 'multer'
import path from 'path'

import { createImg, getAllImgs, deleteImg } from '../controller/imgContoller.js'

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, 'images')
  },
  filename: (req, file, cd) => {
    cd(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage: storage })

router
  .route('/uploadeImages')
  .post(upload.single('myfile'))
  .post(createImg)
  .get(getAllImgs)

export default router
