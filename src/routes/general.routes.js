import { Router } from 'express'
const rutasGenerales = Router()

rutasGenerales.get('/', (req, res) => {
  res.json({
    message: 'Funciona la ruta'
  })
})

rutasGenerales.get('*', (req, res) => {
  res.status(404).json({
    message: 'Ha habido un problema'
  })
})

export default rutasGenerales
