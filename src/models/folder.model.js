import mongoose from 'mongoose'
const  {Schema} = mongoose

const folerSchema = new Schema({
  colectionId:{
    type: String,
    required: true
  },
  title:{
    type: String,
    unique: true,
    required: true,
    default: "New Folder"
  },
  desc:{
    type: String,
    default: 'Some description about this foler',
    required: false
  }
}, {
  timestamps: true
})

export default mongoose.model('Foler', folerSchema)