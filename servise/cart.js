const cart = require('../models/Cart');
 
const getAllCarts = async (filter = {}) => {
  return await cart.find(filter).sort({ createdAt: -1 });
}

const getCartById = async (id) => {
  return await cart.findById(id);
}
const createCart = async (data) => {
  const newCart = new cart(data);
  return await newCart.save();
}
const updateCart = async (id, data) => {
  return await cart.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}
const deleteCart = async (id) => {
  return await cart.findByIdAndDelete(id);
}
module.exports = { getAllCarts, getCartById, createCart, updateCart, deleteCart };