const express = require('express');
const router = express.Router();
const {
  getProducts,
  addProduct,
  editProduct,
  markAsSold,
  removeProduct,
} = require('../controllers/productcontrollers');

router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:id', editProduct);
router.patch('/:id/sale', markAsSold);
router.delete('/:id', removeProduct);

module.exports = router;
