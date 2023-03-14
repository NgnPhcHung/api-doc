import express from 'express'
const router = express.Router()
import authRoute from './auth.router.js'
import userRoute from './user.router.js'
import collectionRoute from './collection.router.js'
import folderRoute from './folder.router.js'
import apiCallRoute from './apiCall.router.js'

router.use('/auth', authRoute)
router.use('/user', userRoute)
router.use('/collection', collectionRoute)
router.use('/:collectionId/folder', folderRoute)
router.use('/:folderId/api-req', apiCallRoute)

export default router