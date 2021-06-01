import express from 'express'
import Producto from '../controllers/Producto.js'
const router = express.Router()
const producto = new Producto()


router.post('/', producto.add)
router.get('/', producto.findAll)
router.get('/:id', producto.findByID)
router.delete('/:id', producto.deleteProd)
router.put('/:id', producto.update)



export default router