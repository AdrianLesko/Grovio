import express from 'express'
import { createGroup, joinGroup, getGroups, getGroupById, deleteGroup} from '../controllers/groupController.js'
import { verifyToken } from '../middleware/auth.middleware.js'
import { checkGroup } from '../middleware/checkGroup.middleware.js'
import { rateLimit } from 'express-rate-limit'

const router = express.Router()

const joinLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  message: {msg: 'Príliš veľa pokusov o pripojenie. Skúste to znova o 15 minút'},
  standardHeaders: 'draft-8',
  legacyHeaders: false,
})

router.post('/', verifyToken, createGroup)
router.post('/join', verifyToken, joinLimiter, joinGroup)
router.get('/', verifyToken, getGroups)
router.get('/:groupId', verifyToken, checkGroup, getGroupById)
router.delete('/:groupId', verifyToken, checkGroup, deleteGroup)

export default router