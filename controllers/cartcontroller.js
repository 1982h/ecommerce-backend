const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../servise/product');


const getProducts = async (req, res, next) => {
  try {
    const filter = req.query.sales === 'true' ? { sales: true } : {};
    const Products = await getAllProducts(filter);
    res.json(Products);
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const newProduct = await createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

const editProduct = async (req, res, next) => {
  try {
    const updatedProduct = await updateProduct(req.params.id, req.body);
    if (!updatedProduct) {
      const error = new Error('Product not found');
      error.status = 404;
      return next(error);
    }
    res.json({ message: 'Product updated successfully!' });
  } catch (error) {
    next(error);
  }
};


const removeProduct = async (req, res, next) => {
  try {
    const deletedProduct = await deleteProduct(req.params.id);
    if (!deletedProduct) {
      const error = new Error('Product not found');
      error.status = 404;
      return next(error);
    }
    res.json({ message: 'Product deleted successfully!' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, addProduct, editProduct, removeProduct };
