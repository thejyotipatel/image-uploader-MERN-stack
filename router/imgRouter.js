import express from 'express'
const router = express.Router()
import multer from 'multer'

import { createImg, getImg } from '../controller/imgContoller.js'

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, 'images')
  },
  filename: (req, file, cd) => {
    cd(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage: storage })

router.route('/upload').post(upload.single('myfile')).post(createImg)

router.route('/images').get(getImg)

export default router
