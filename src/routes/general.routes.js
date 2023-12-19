import { Router } from 'express'
const rutasGenerales = Router()

rutasGenerales.get('/', (req, res) => { // ruta predeterminada del router
  res.json({
    message: 'Funciona la ruta'
  })
})

rutasGenerales.get('*', (req, res) => { // Cuando no exista ninguna ruta, da ese error, siempre poner al final
  res.status(404).json({
    message: 'Ha habido un problema'
  })
})

export default rutasGenerales
