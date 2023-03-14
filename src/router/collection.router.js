import express from 'express'
import { createCol, deleteCol, getAll, getOne, updateCol } from '../controller/collection.controller.js'
import { verifyToken } from '../middleware/jwt.js'
const router = express.Router()

router.post('/create', verifyToken, createCol)
router.put('/update/:id', verifyToken, updateCol)
router.get('/:id', verifyToken, getOne)
router.get('/', verifyToken, getAll)
router.delete('/:id', verifyToken, deleteCol)

export  default router