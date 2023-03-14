import mongoose from 'mongoose'
const  {Schema} = mongoose

const parameterSchema = new Schema({
  folderId: {
    type: String,
    required: true
  },
  func:{
    type: String,
    unique: true,
    required: true,
  },
  desc:{
    type: String,
    default: 'Some description about this Parameter',
    required: false
  },
  method:{
    type: String,
    required: true,
    default: 'GET'
  },
  paramType:{
    type: String,
    required: true,
    default:'Headers'
  },
  paramCount:{
    type: Number,
    required: false,
    default: 0,
  },
  paramData: {
    type: String, 
    required: false
  },
  resultCode:{
    type: Number,
    required: false,
    default: 200
  },
  resultMes:{
    type: String,
    required: false
  },
  resultData:{
    type: String,
    required: false
  }
}, {
  timestamps: true
})

export default mongoose.model('Parameter', parameterSchema)