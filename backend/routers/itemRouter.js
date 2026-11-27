import express from 'express'
import { getItems, createItem, deleteItem, updateItem} from '../controllers/itemController.js'

const router = express.Router( {mergeParams: true})

router.get('/', getItems)
router.post('/', createItem)
router.delete('/:id', deleteItem)
router.patch('/:id', updateItem)


export default router