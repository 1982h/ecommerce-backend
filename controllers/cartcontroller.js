// استيراد دوال التعامل مع المنتجات من ملف Service
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../services/product');

// ==========================================
// جلب جميع المنتجات
// ==========================================
const getProducts = async (req, res, next) => {
  try {

    // إذا كانت قيمة sales=true يتم عرض المنتجات المباعة فقط
    const filter = req.query.sales === 'true' ? { sales: true } : {};

    // جلب المنتجات من قاعدة البيانات
    const Products = await getAllProducts(filter);

    // إرسال قائمة المنتجات
    res.json(Products);

  } catch (error) {

    // إرسال الخطأ إلى Error Handler
    next(error);
  }
};

// ==========================================
// إضافة منتج جديد
// ==========================================
const addProduct = async (req, res, next) => {
  try {

    // إنشاء المنتج باستخدام البيانات المرسلة في Body
    const newProduct = await createProduct(req.body);

    // إرسال المنتج بعد إضافته بنجاح
    res.status(201).json(newProduct);

  } catch (error) {

    // إرسال الخطأ إلى Error Handler
    next(error);
  }
};

// ==========================================
// تعديل بيانات منتج
// ==========================================
const editProduct = async (req, res, next) => {
  try {

    // تعديل المنتج باستخدام الـ ID والبيانات الجديدة
    const updatedProduct = await updateProduct(req.params.id, req.body);

    // إذا لم يتم العثور على المنتج
    if (!updatedProduct) {
      const error = new Error('Product not found');
      error.status = 404;
      return next(error);
    }

    // إرسال رسالة نجاح بعد التعديل
    res.json({ message: 'Product updated successfully!' });

  } catch (error) {

    // إرسال الخطأ إلى Error Handler
    next(error);
  }
};

// ==========================================
// حذف منتج
// ==========================================
const removeProduct = async (req, res, next) => {
  try {

    // حذف المنتج باستخدام الـ ID
    const deletedProduct = await deleteProduct(req.params.id);

    // إذا لم يتم العثور على المنتج
    if (!deletedProduct) {
      const error = new Error('Product not found');
      error.status = 404;
      return next(error);
    }

    // إرسال رسالة نجاح بعد الحذف
    res.json({ message: 'Product deleted successfully!' });

  } catch (error) {

    // إرسال الخطأ إلى Error Handler
    next(error);
  }
};

// تصدير جميع الدوال لاستخدامها داخل Routes
module.exports = {
  getProducts,
  addProduct,
  editProduct,
  removeProduct
};