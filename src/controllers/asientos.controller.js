// Este objeto simulará nuestra "base de datos" en memoria
let asientosEnMemoria = {};


export const getAsientosPorSlug = (req, res) => {
    const { slug } = req.params;
    const asientos = asientosEnMemoria[slug];
    
    if (asientos) {
        res.json({ butacasOcupadas: asientos });
    } else {
        res.status(404).json({ mensaje: 'No se encontraron asientos para este slug' });
    }
};

export const guardarAsientos = (req, res) => {
  const { slug } = req.params;
  const { asientosSeleccionados } = req.body;

  // Agregar un console.log para verificar si se llega al controlador
  console.log('Guardando asientos para slug:', slug);

  asientosEnMemoria[slug] = asientosSeleccionados;

  res.json({ mensaje: 'Asientos guardados exitosamente', butacasOcupadas: asientosSeleccionados });
};
