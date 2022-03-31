import express from 'express'
const router = express.Router()

import { createImg, getAllImgs, deleteImg } from '../controller/imgContoller.js'
import uploadProductImage from '../controller/uploadImgController.js'

router.route('/').post(createImg).get(getAllImgs)
router.route('/uploads').post(uploadProductImage)

export default router
