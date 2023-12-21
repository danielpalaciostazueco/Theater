import { Schema, model } from 'mongoose'

const obrasSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  authors: {
    type: Array,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  actors: {
    type: Array,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  dates: {
    type: Array,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  cartel: {
    type: String,
    required: true
  }

})

export default model('Obras', obrasSchema)
