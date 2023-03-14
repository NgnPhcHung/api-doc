import mongoose from 'mongoose'
const  {Schema} = mongoose

const collectionSchema = new Schema({
  user:{
    type:String, 
    required: true
  },
  title:{
    type: String,
    required: true,
    default: 'New Collection'
  },
  desc:{
    type: String,
    default: 'Some description about this collection',
    required: false
  },
  host:{
    type: String,
    required: false,
    default: 'example http://localhost:3000/api/'
  },
  isPrivate:{
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

export default mongoose.model('Collection', collectionSchema)