const Product = require('../models/Product');


const getAllProducts = async (filter = {}) => {
  
  return await Product.find(filter).sort({ createdAt: -1 });
};


const getProductById = async (id) => {
 
  return await Product.findById(id);
};


const createProduct = async (data) => {
 
  const newProduct = new Product(data);
  return await newProduct.save();
};


const updateProduct = async (id, data) => {
 
  return await Product.findByIdAndUpdate(id, data,{ new: true, runValidators: true });
};


const deleteProduct = async (id) => {
 
  return await Product.findByIdAndDelete(id);
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
