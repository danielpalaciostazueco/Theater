// models/asientos.models.js

import mongoose from 'mongoose';

const asientoSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  asientosSeleccionados: [{ type: String, required: true }]
});

const Asiento = mongoose.model('Asiento', asientoSchema);

export default Asiento;
