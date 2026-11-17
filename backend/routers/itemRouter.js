import express from 'express'
import { getItems, getItem, createItem, deleteItem, updateItem} from '../controllers/itemController.js'

const router = express.Router()

router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', createItem)
router.delete('/:id', deleteItem)
router.patch('/:id', updateItem)


export default router