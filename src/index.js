import express from 'express'
import { PORT, TYPE } from './utils/config.js'
import rutasGenerales from './routes/general.routes.js'
import obrasRuta from './routes/obras.route.js'
import morgan from 'morgan'
import './utils/bbdd.js' // Cargar archivo para iniciar conexión  y si los bucles

const app = express()
app.use(morgan(TYPE))// Llamo a morgan
app.use('/', rutasGenerales)// Uso la ruta general

app.use('/obras', obrasRuta) // Ruta de obras
app.use('/', rutasGenerales)// Uso la ruta general y poner al final
app.listen(PORT, () => {
  console.info('listening on port ' + PORT)
})
