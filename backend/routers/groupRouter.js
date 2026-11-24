import express from 'express'
import { createGroup, joinGroup, getGroups } from '../controllers/groupController.js'
import { verifyToken } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/', verifyToken, createGroup)
router.post('/join', verifyToken, joinGroup)
router.get('/', verifyToken, getGroups)

export default router