import express from 'express'
import { PORT, TYPE } from './utils/config.js'
import rutasGenerales from './routes/general.routes.js'
import obrasRuta from './routes/obras.route.js'
import Asiento from './models/asientos.models.js';
import asientosRouter from './routes/asientos.routes.js';


import morgan from 'morgan'
import './utils/bbdd.js' // Cargar archivo para iniciar conexión  y si los bucles

const app = express()
app.use(morgan(TYPE)) // Llamo a morgan
app.use(express.json()) // Agregar soporte para JSON en las solicitudes
app.use('/api/asientos', asientosRouter);
app.use('/api/obras', obrasRuta) // Ruta de obras
app.use('/api/', rutasGenerales) // Uso la ruta general y poner al final

app.use('/', express.static('src/public'))




app.listen(PORT, () => {
  console.info('listening on port ' + PORT)
})
