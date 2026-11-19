import Item from "../models/item.js";

const getItems = async (req, res, next) => {
  try {
    const user = req.user
    const items = await Item.find({ user: user.id});
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
};

const getItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await Item.findById(id);
    if (!item) {
      const err = new Error("Item not found");
      err.status = 404;
      next(err);
      return;
    }
    res.status(200).send(item);
  } catch (err) {
    next(err);
  }
};

const createItem = async (req, res, next) => {
  try {
    const content = req.body;
    const item = await Item.create({...content, user: req.user.id});
    res.status(200).json(item);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = req.user

    const item = await Item.findOneAndDelete({_id: id, user: user.id})

    if (!item) {
      const err = new Error('Item to delete not found or access denied')
      err.status = 404
      throw err
    }
    
    res.status(200).json({ message: 'Item successfully deleted', id})
  } catch (err) {
    next(err);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const reqItem = req.body;
    const user = req.user

    const item = await Item.findOne({ _id: id, user: user.id});

    if (!item) {
      const err = new Error("Item not found");
      err.status = 404;
      next(err);
      return;
    }

     if (item.user.toString() !== user.id) {
      const err = new Error('Unauthorized')
      err.status = 403
      throw err
    }
  
    Object.assign(item, reqItem);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

export { getItems, getItem, createItem, deleteItem, updateItem };
