import express from 'express'
import { createApi, delelteApi, getAll, getOne, updateApi } from '../controller/apiCall.controller.js'
import { verifyToken } from '../middleware/jwt.js'
const router = express.Router()

router.post('/create', verifyToken, createApi)
router.put('/update/:id', verifyToken, updateApi)
router.get('/:id', verifyToken, getOne)
router.get('/', verifyToken, getAll)
router.delete('/:id', verifyToken, delelteApi)

export  default router