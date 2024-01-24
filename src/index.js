import express from 'express'
import { PORT, TYPE } from './utils/config.js'
import rutasGenerales from './routes/general.routes.js'
import obrasRuta from './routes/obras.route.js'
import morgan from 'morgan'
import './utils/bbdd.js' // Cargar archivo para iniciar conexión  y si los bucles

const app = express()
app.use(morgan(TYPE)) // Llamo a morgan
app.use(express.json()) // Agregar soporte para JSON en las solicitudes

app.use('/api/obras', obrasRuta) // Ruta de obras
app.use('/api/', rutasGenerales) // Uso la ruta general y poner al final
app.use('/', express.static('src/public'))

// Agregar un endpoint POST a '/api/asientos/:slug'
app.post('/api/asientos/:slug', (req, res) => {
  const { slug } = req.params
  // Aquí puedes manejar la lógica para el endpoint POST de asientos
  // Puedes acceder a los datos enviados en el cuerpo de la solicitud usando 'req.body'
  // Realiza la lógica necesaria y responde según tus necesidades
  res.json({ mensaje: `Endpoint POST para asientos en ${slug}` })
})

app.listen(PORT, () => {
  console.info('listening on port ' + PORT)
})
