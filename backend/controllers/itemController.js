import Item from "../models/item.js";

const getItems = async (req, res, next) => {
  try {
    const items = await Item.find();
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
    const item = await Item.create(content);
    res.status(200).json(item);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await Item.deleteOne({ _id: id });
    res.status(200).json();
  } catch (err) {
    next(err);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const reqItem = req.body;
    const item = await Item.findById(id);

    if (!item) {
      const err = new Error("Item not found");
      err.status = 404;
      next(err);
      return;
    }
    Object.assign(item, reqItem);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

export { getItems, getItem, createItem, deleteItem, updateItem };
