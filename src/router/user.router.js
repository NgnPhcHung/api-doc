import express from 'express'
import { deleteUser, getUser, updateUSer } from '../controller/user.controller.js'
import { verifyToken } from '../middleware/jwt.js'

const router = express.Router()

router.put('/:id', verifyToken ,updateUSer)
router.delete('/:id', verifyToken, deleteUser)
router.get('/:id', getUser)

export  default router