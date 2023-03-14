import Collection from '../models/collection.model.js'
import createError from '../utils/createError.js'

const userCanAlter = async () =>{
  const user = Collection.findOne({user: req.userId})
    if(!user) return false
    return true
}

const createCol = async (req, res, next) =>{
  try {
    const newCol = new Collection({
      user: req.userId
    })
    const saveCol = await  newCol.save()
    res.status(201).json(saveCol)
  } catch (error) {
    next(error)
  }
}
const updateCol = async (req, res, next) =>{
  try {
    if(userCanAlter){
      const { title, description, host, isPrivate } = req.body
      if(title === '') req.body.title = 'New Collection'
      if(description === '') req.body.description = 'Some description about this collection'
      const updated = await Collection.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, {new: true})
      return res.status(200).json(updated)
    } return next(createError(401, 'You have not permission to perform this action'))
  } catch (error) {
    next(error)
  }
}
const deleteCol = async (req, res, next) =>{
  if(userCanAlter){
    const collection = await Collection.findById(req.params.id)
    if (req.userId !== collection.user) {
      return next(createError(403, "You can delete only your account!"));
    }
    await Collection.findByIdAndDelete(req.params.id)
    return res.status(200).send("Deleted")
  }return next(createError(401, 'You have not permission to perform this action'))
}
const getOne = async (req, res, next) =>{
  try {
    const col = await Collection.findById(req.params.id)
    if(!col) next(createError(404, 'Collection not found'))
    res.status(200).send(col)
  } catch (error) {
    next(error)
  }
}
const getAll = async (req, res, next) =>{
  try {
    const col = await Collection.find({user: req.userId})
    if(!col) next(createError(404, 'User does not have any collection'))
    res.status(200).send(col)
  } catch (error) {
    next(error)
  }
}

export {
  createCol,
  updateCol,
  deleteCol,
  getOne,
  getAll
}