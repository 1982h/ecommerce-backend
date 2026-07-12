const express = require('express');

const router = express.Router();
const {
  getProducts,
  addProduct,
  editProduct,
  removeProduct,
} = require('../controllers/cartcontroller');

router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:id', editProduct);
router.delete('/:id', removeProduct);

module.exports = router;
