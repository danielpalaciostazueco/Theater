import ObrasModel from '../models/obra.models.js'
export const getObras = async () => {
  return ObrasModel.find()
}

export const getObraById = async (id) => {
  const slug = id
  return ObrasModel.findOne({ slug })
}
