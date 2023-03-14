import Collection from '../models/collection.model.js'
import Folder from '../models/folder.model.js'
import createError from '../utils/createError.js'

const createFolder = async (req, res, next) =>{
  try {
    if(!req.params.collectionId) return next(createError(404, 'Collection not valid'))
    const collection = await new Collection.findById(req.params.collectionId)
    if(!collection) return next(createError(404, 'Collection not found')) 
    const newFolder = new Folder({
      collectionId: req.params.collectionId
    })
    const savedFolder = await  newFolder.save()
    return res.status(201).json(savedFolder)
  } catch (error) {
    next(error)
  }
}
const updateFolder = async (req, res, next) =>{
  try {
    const { title, description } = req.body

    if(title === '') req.body.title = 'New Folder'
    if(description === '') req.body.description = 'Some description about this Folder'
    const updated = await Folder.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true})
    return res.status(200).json(updated)
  } catch (error) {
    next(error)
  }
}
const getOne = async (req, res, next) =>{
  try {
    const folder = await Folder.findById(req.params.id)
    if(!folder) next(createError(404, 'Folder not found'))
    res.status(200).send(folder)
  } catch (error) {
    next(error)
  }
}
const getAll = async (req, res, next) =>{
  try {
    const folder = await Folder.find({collectionId: req.params.collectionId})
    if(!folder) next(createError(404, 'Try to create new one'))
    res.status(200).send(folder)
  } catch (error) {
    next(error)
  }
}

const deleteFolder = async (req, res, next) =>{
  try {
    await Folder.findByIdAndDelete(req.params.id)
    return res.status(200).send("Deleted")
  } catch (error) {
    
  }
}

export {
  createFolder,
  updateFolder,
  getOne,
  getAll, 
  deleteFolder
}