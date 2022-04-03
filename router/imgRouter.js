import express from 'express'
const router = express.Router()
import multer from 'multer'

import { createImg, getAllImgs, deleteImg } from '../controller/imgContoller.js'
// import uploadProductImage from '../controller/uploadImgController.js'

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, 'images/')
  },
  filename: (req, file, cd) => {
    cd(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage: storage })

router
  .route('/uploadeImages')
  .post(createImg)
  .get(getAllImgs)
  .post(upload.single('myFile'))

// router.route('/uploads').post(uploadProductImage)

export default router
