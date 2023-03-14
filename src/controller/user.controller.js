import User from '../models/user.model.js'
import createError from '../utils/createError.js';

const updateUSer = async (req, res, next) =>{
  try {
    const currentUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    })
    res.status(200).send(currentUser)
  } catch (error) {
    createError(error)
  }
}
const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};
const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};
export {
  updateUSer,
  deleteUser,
  getUser
}