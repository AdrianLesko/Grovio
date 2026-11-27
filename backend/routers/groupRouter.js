import express from 'express'
import { createGroup, joinGroup, getGroups, getGroupById, deleteGroup} from '../controllers/groupController.js'
import { verifyToken } from '../middleware/auth.middleware.js'
import { checkGroup } from '../middleware/checkGroup.middleware.js'

const router = express.Router()

router.post('/', verifyToken, createGroup)
router.post('/join', verifyToken, joinGroup)
router.get('/', verifyToken, getGroups)
router.get('/:groupId', verifyToken, checkGroup, getGroupById)
router.delete('/:groupId', verifyToken, checkGroup, deleteGroup)

export default router