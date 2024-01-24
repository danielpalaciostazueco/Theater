import { model, Schema } from 'mongoose'

const entradasSchema = new Schema({
  slug: {
    type: String,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  },
  entradasVendidas: {
    type: Array,
    required: true
  }
})

export default model('Entradas', entradasSchema)
