// Middleware مخصص لمعالجة الأخطاء في التطبيق
const errorHandler = (err, req, res, next) => {

  // تحديد كود الحالة (Status Code)
  // إذا كان الخطأ يحتوي على Status يتم استخدامه، وإلا يكون 500 (Internal Server Error)
  const status = err.status || 500;

  // إرسال استجابة JSON تحتوي على حالة الفشل ورسالة الخطأ
  res.status(status).json({
    success: false,
    message: err.message
  });
};

// تصدير الـ Middleware لاستخدامه في app.js
module.exports = errorHandler;