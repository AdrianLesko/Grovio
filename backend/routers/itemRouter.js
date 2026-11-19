import express from 'express'
import { getItems, getItem, createItem, deleteItem, updateItem} from '../controllers/itemController.js'
import { verifyToken } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/', verifyToken, getItems)
router.get('/:id', verifyToken, getItem)
router.post('/',verifyToken, createItem)
router.delete('/:id', verifyToken, deleteItem)
router.patch('/:id', verifyToken, updateItem)


export default router