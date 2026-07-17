const mongoose = require('mongoose');

// إنشاء Schema الخاصة بالسلة (Cart)
const cartSchema = new mongoose.Schema(
  {
    // عنوان أو اسم المنتج داخل السلة
    title: {
      type: String,                     // نوع البيانات نص
      required: [true, 'Title is required'], // حقل إجباري
      trim: true                        // حذف المسافات الزائدة من البداية والنهاية
    },

    // نوع أو تصنيف المنتج
    genre: {
      type: String, // نوع البيانات نص
      trim: true    // حذف المسافات الزائدة
    },

    // السعر الإجمالي للمنتج أو الطلب داخل السلة
    totalprice: {
      type: Number, // نوع البيانات رقم
      min: 0        // لا يسمح بقيمة أقل من صفر
    }
  },

  // إضافة حقول تلقائية:
  // createdAt → تاريخ الإنشاء
  // updatedAt → تاريخ آخر تعديل
  { timestamps: true }
);

// إنشاء Model باسم Cart وتصديره لاستخدامه في باقي المشروع
module.exports = mongoose.model('cart', cartSchema);
