// استيراد نموذج (Model) السلة من قاعدة البيانات
const cart = require('../models/Cart');

// جلب جميع عناصر السلة مع إمكانية تطبيق فلتر (إن وجد)
// ويتم ترتيب النتائج من الأحدث إلى الأقدم
const getAllCarts = async (filter = {}) => {
  return await cart.find(filter).sort({ createdAt: -1 });
}

// البحث عن عنصر في السلة باستخدام الـ ID
const getCartById = async (id) => {
  return await cart.findById(id);
}

// إنشاء عنصر جديد داخل السلة
const createCart = async (data) => {

  // إنشاء كائن جديد من نموذج Cart
  const newCart = new cart(data);

  // حفظ البيانات في قاعدة البيانات
  return await newCart.save();
}

// تعديل بيانات عنصر موجود في السلة باستخدام الـ ID
const updateCart = async (id, data) => {

  // new: true → إرجاع البيانات بعد التعديل
  // runValidators: true → تطبيق قواعد التحقق (Validation)
  return await cart.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
}

// حذف عنصر من السلة باستخدام الـ ID
const deleteCart = async (id) => {
  return await cart.findByIdAndDelete(id);
}

// تصدير جميع الدوال لاستخدامها في الـ Controller
module.exports = {
  getAllCarts,
  getCartById,
  createCart,
  updateCart,
  deleteCart
};