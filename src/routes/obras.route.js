import { Router } from 'express'
import { getObras, getObraById } from '../controllers/obras.controller.js'

const router = Router()

router.get('/', async (req, res) => {
  const obras = await getObras()
  res.json({ obras })
})

router.get('/:id', async (req, res) => {
  // Get obra by id
  const obra = await getObraById(req.params.id)

  res.json({ obra })
})

export default router
