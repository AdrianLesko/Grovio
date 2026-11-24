import Item from "../models/item.js";
import mongoose from 'mongoose'

const validateReqContent = (user, group) => {
  if (!user || !group) {
    const err = new Error('Request inputs are missing or wrong')
    err.status = 400
    throw err
  }
  if (!group.members.some(memberId => memberId.toString() === user.id)) {
    const err = new Error('Prístup odmietnutý. Prihláste sa znova')
    err.status = 403
    throw err
  }
}

const getItems = async (req, res, next) => {
  try {
    const { user, group } = req
    validateReqContent(user, group)
    const items = await Item.find({ group: group.id }).populate('addedBy', 'username')
    res.status(200).json(items)
  } catch (err) {
    next(err);
  }
};

const createItem = async (req, res, next) => {
  try {
  
    const { user, group } = req
    const { title, quantity, unit } = req.body

    if (!title || isNaN(quantity)) {
      const err = new Error('Zadajte platné hodnoty')
      err.status = 400
      throw err
    }
    validateReqContent(user,group)

    const newItem = await Item.create({
      title,
      quantity,
      unit,
      group: group.id,
      addedBy: user.id
    })
    await newItem.populate('addedBy', 'username')
    res.status(201).json(newItem)
  } catch (err) {
    next(err);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const {user, group} = req
   
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if (!isValid) {
      const err = new Error('poskytnute itemID nie je spravne')
      err.status = 400
      throw err
    }

    validateReqContent(user, group)

    const item = await Item.findOneAndDelete({ _id: id, group: group.id})

    if (!item) {
      const err = new Error(`Item s id: ${id} sa nenašla`)
      err.status = 404
      throw err
    }

    res.status(200).json({id})

  } catch (err) {
    next(err);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const {title, isBought, unit, quantity } = req.body
   
    const { user, group } = req

    const isValid = mongoose.Types.ObjectId.isValid(id)
    if (!isValid) {
      const err = new Error('poskytnute ID nie je spravne')
      err.status = 400
      throw err
    }
    
    validateReqContent(user, group)

    const item = await Item.findOne({_id: id, group: group.id}).populate('addedBy', 'username')
    if (!item) {
      const err = new Error(`Polozka s id: ${id} sa nenasla`)
      err.status = 404
      throw err
    }

    if (title !== undefined) item.title = title
    if (quantity !== undefined) item.quantity = quantity
    if (unit !== undefined) item.unit = unit
    if (isBought !== undefined) item.isBought = isBought
    
    await item.save() 
    res.status(200).json(item)
  } catch (err) {
    next(err);
  }
};

export { getItems, createItem, deleteItem, updateItem };
