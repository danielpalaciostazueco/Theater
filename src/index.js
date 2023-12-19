import express from 'express'
import { PORT, TYPE } from './utils/config.js'
import rutasGenerales from './routes/general.routes.js'
import morgan from 'morgan'
import './utils/bbdd.js' // Cargar archivo para iniciar conexión  y si los bucles

const app = express()
app.use(morgan(TYPE))// Llamo a morgan
app.use('/', rutasGenerales)// Uso la ruta general

app.listen(PORT, () => {
  console.info('listening on port ' + PORT)
})
