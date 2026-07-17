const mongoose = require('mongoose');

// إنشاء Schema الخاصة بالمنتجات (Product)
const productSchema = new mongoose.Schema(
  {
    // عنوان أو اسم المنتج
    title: {
      type: String,                      // نوع البيانات نص
      required: [true, 'Title is required'], // حقل إجباري
      trim: true                         // حذف المسافات الزائدة
    },

    // نوع أو تصنيف المنتج
    genre: {
      type: String, // نوع البيانات نص
      trim: true    // حذف المسافات الزائدة
    },

    // سعر المنتج
    price: {
      type: Number, // نوع البيانات رقم
      min: 0        // لا يسمح بقيمة أقل من صفر
    },

    // تقييم المنتج
    rating: {
      type: Number, // نوع البيانات رقم
      min: 1,       // أقل تقييم مسموح به
      max: 10       // أعلى تقييم مسموح به
    },

    // حالة بيع المنتج
    sales: {
      type: Boolean,  // نوع البيانات صحيح أو خطأ (True / False)
      default: false  // القيمة الافتراضية هي لم يتم البيع
    }
  },

  // إضافة حقول تلقائية:
  // createdAt → تاريخ إنشاء المنتج
  // updatedAt → تاريخ آخر تعديل
  { timestamps: true }
);

// إنشاء Model باسم Product وتصديره لاستخدامه في المشروع
module.exports = mongoose.model('Product', productSchema);
