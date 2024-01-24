import mongoose from 'mongoose'
import { DBSTRING } from './config.js'
const conexion = () => {
  console.info('Conectandose a la base de datos')
  mongoose
    .connect(DBSTRING)
    .catch((err) => {
      console.error('Hay un error al conectar con la base de datos')
      console.debug(err)
      setTimeout(conexion, 5000)
    })
    .then(() => {
      console.info('Conexión exitosa a la base de datos')
    })
}

conexion()

setInterval(() => {
  if (mongoose.connection.readyState !== 1) {
    console.warn('Se ha perdido la conexión con la base de datos, volviendo a conectar...')
    conexion()
  }
}, 5000)
