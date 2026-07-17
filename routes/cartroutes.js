const express = require('express');

// إنشاء Router لتنظيم مسارات الـ Cart
const router = express.Router();

// استيراد دوال التحكم الخاصة بعمليات الـ Cart
const {
  getProducts,
  addProduct,
  editProduct,
  removeProduct,
} = require('../controllers/cartcontroller');

// جلب جميع المنتجات الموجودة في الـ Cart
router.get('/', getProducts);

// إضافة منتج جديد إلى الـ Cart
router.post('/', addProduct);

// تعديل بيانات منتج داخل الـ Cart باستخدام الـ ID
router.put('/:id', editProduct);

// حذف منتج من الـ Cart باستخدام الـ ID
router.delete('/:id', removeProduct);

// تصدير الـ Router لاستخدامه في app.js
module.exports = router;
