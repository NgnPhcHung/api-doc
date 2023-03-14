import express from 'express'
import { createFolder, deleteFolder, getAll, getOne, updateFolder } from '../controller/folder.controller.js'
import { verifyToken } from '../middleware/jwt.js'
const router = express.Router()

router.post('/create', verifyToken, createFolder)
router.put('/update/:id', verifyToken, updateFolder)
router.get('/:id', verifyToken, getOne)
router.get('/', verifyToken, getAll)
router.delete('/:id', verifyToken, deleteFolder)

export  default router