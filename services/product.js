// استيراد نموذج (Model) المنتجات من قاعدة البيانات
const Product = require('../models/Product');

// جلب جميع المنتجات مع إمكانية تطبيق فلتر (إن وجد)
// ويتم ترتيب النتائج من الأحدث إلى الأقدم
const getAllProducts = async (filter = {}) => {
  return await Product.find(filter).sort({ createdAt: -1 });
};

// البحث عن منتج باستخدام الـ ID
const getProductById = async (id) => {
  return await Product.findById(id);
};

// إنشاء منتج جديد
const createProduct = async (data) => {

  // إنشاء كائن جديد من نموذج Product
  const newProduct = new Product(data);

  // حفظ المنتج في قاعدة البيانات
  return await newProduct.save();
};

// تعديل بيانات منتج موجود باستخدام الـ ID
const updateProduct = async (id, data) => {

  // new: true → إرجاع بيانات المنتج بعد التعديل
  // runValidators: true → تطبيق قواعد التحقق (Validation)
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

// حذف منتج من قاعدة البيانات باستخدام الـ ID
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

// تصدير جميع الدوال لاستخدامها داخل الـ Controller
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};