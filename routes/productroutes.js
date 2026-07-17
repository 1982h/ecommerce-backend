const express = require('express');

// إنشاء Router لتنظيم جميع مسارات المنتجات
const router = express.Router();

// استيراد دوال التحكم الخاصة بالمنتجات
const {
  getProducts,
  addProduct,
  editProduct,
  markAsSold,
  removeProduct,
} = require('../controllers/productcontrollers');

// عرض جميع المنتجات
router.get('/', getProducts);

// إضافة منتج جديد
router.post('/', addProduct);

// تعديل بيانات منتج باستخدام الـ ID
router.put('/:id', editProduct);

// تحديث حالة المنتج إلى "تم بيعه" باستخدام الـ ID
router.patch('/:id/sale', markAsSold);

// حذف منتج باستخدام الـ ID
router.delete('/:id', removeProduct);

// تصدير الـ Router لاستخدامه في app.js
module.exports = router;
