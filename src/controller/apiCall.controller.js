import ApiCall from "../models/apiCall.js";
import Folder from "../models/folder.model.js";
import createError from "../utils/createError.js";

const createApi = async (req, res, next) =>{
  try {
    const {folderId} = req.params
    if(!folderId) return next(createError(404, 'Folder not valid'))
    const folder = await new Folder.findById(folderId)
    if(!folder) return next(createError(404, 'Folder not found'))
    const newFolder = new Folder({
      colectionId: req.params.colectionId
    })
    const savedFolder = await  newFolder.save()
    return res.status(201).json(savedFolder)
  } catch (error) {
    next(error)
  }
}
const updateApi = async (req, res, next) =>{
  try {
    const updated = await ApiCall.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true})
    return res.status(200).json(updated)
  } catch (error) {
    next(error)
  }
}
const getOne = async (req, res, next) =>{
  try {
    const result = await ApiCall.findById(req.params.id)
    if(!result) next(createError(404, 'Api not found'))
    res.status(200).send(result)
  } catch (error) {
    next(error)
  }
}
const getAll = async (req, res, next) =>{
  try {
    const folder = await ApiCall.find({folderId: req.params.folderId})
    if(!folder) next(createError(404, 'Try to create new one'))
    res.status(200).send(folder)
  } catch (error) {
    next(error)
  }
}

const delelteApi = async (req, res, next) =>{
  try {
    await ApiCall.findByIdAndDelete(req.params.id)
    return res.status(200).send("Deleted")
  } catch (error) {
    next(error)
  }
}

export {
  createApi,
  updateApi,
  getOne,
  getAll, 
  delelteApi
}