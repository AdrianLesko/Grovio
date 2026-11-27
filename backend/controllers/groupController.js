import { generateCode } from '../utils/generateCode.js'
import Group from '../models/Group.js'
import Item from '../models/item.js'

export async function getGroupById (req,res,next) {
  try {
    res.status(200).json(req.group)
  } catch (err) {
    next(err)
  }
}

export async function createGroup ( req,res,next ) {
  try {
   const { name } = req.body
   const user = req.user

    if (!user || !user.id) {
      const err = new Error('Akcia nepovolená. Prihláste sa znova')
      err.status = 403
      throw err
    }
    
    if (!name) {
      const err = new Error('Chybajúce alebo neplatné meno skupiny')
      err.status = 400
      throw err
    }

    const newGroup = {
      name,
      owner: user.id, 
      members: [user.id]
    }

    let isUnique = false

    while (!isUnique) {
      const code = generateCode()
      const group = await Group.findOne({ connectionCode: code})

      if (!group) {
        newGroup.connectionCode = code
        isUnique = true
      }
    }

    const group = await Group.create({...newGroup})

    res.status(201).json(group)

  } catch (err) {
    next(err)
  }
 


}

export async function joinGroup ( req, res, next ) {
  try {
    const { code } = req.body
    const user = req.user

    if (!user || !user.id) {
      const err = new Error('Prísup zamietnutý. Prihláste sa znova')
      err.status = 403
      throw err
    }

    if (!code) {
      const err = new Error('Je potrebne správny zadať prístupový kód')
      err.status = 400 
      throw err
    }

    const group = await Group.findOne({connectionCode: code.trim().toUpperCase()})

    if (!group) {
      const err = new Error(`Skupina s kódom: ${code} neexistuje`)
      err.status = 404
      throw err
    }
    if (group.members.some(memberId => memberId.toString() === user.id)) {
      const err = new Error('V tejto skupine sa už nachádzate')
      err.status = 400 
      throw err
    }

    group.members = [user.id, ...group.members]
    await group.save()
    

    res.status(200).json(group)
  } catch (err) {next(err)}
}

export async function getGroups (req,res,next) {
  try {
    const user = req.user

    if (!user) {
      const err = new Error('Prístup odmietnutý. Prihláste sa znova')
      err.status = 403
      throw err
    }

    const groups = await Group.find({ members:user.id}).populate('members', 'username').sort({ createdAt: -1})

    res.status(200).json(groups)
  } catch (err) {
    next(err)
  }
  
}

export async function deleteGroup (req,res,next){
  try {

    const user = req.user
    const group = req.group

    const isOwner = Boolean(group.owner.toString() === user.id)

    if (isOwner) {
      await Item.deleteMany({group: group.id})
      await Group.deleteOne({_id: group.id})
      res.status(200).json({message: 'ok'})
      return
    }

    if (!isOwner) {
      group.members = group.members.filter(memberId => memberId.toString() !== user.id)
      await group.save()
      res.status(200).json({message: 'ok'})
      return 
    }

  } catch (err) {
    next(err)
  }
}