
import Group from '../models/Group.js'
import mongoose from 'mongoose'

export async function checkGroup (req,res,next) {
  try {

    const { groupId }= req.params

    const isValid = mongoose.Types.ObjectId.isValid(groupId)

    if (!isValid) {
      const err = new Error('Neplatny format skupiny: ID')
      err.status = 400
      throw err
    }

    const group = await Group.findById(groupId)

    if (!group) {
      const err = new Error(`Skupina neexistuje`)
      err.status = 404
      throw err
    }

    const isMember = group.members.some(memberId => memberId.toString() === req.user.id)

    if (!isMember) {
      const err = new Error('K tejto skupine nemate pristup')
      err.status = 403
      throw err
    }

    req.group = group
    next()
    void res

  } catch (err) {
    next(err)
  }
}