const mongoose = require('mongoose');

// دالة للاتصال بقاعدة بيانات MongoDB       
const connectDB = async () => {
    try {

        // الاتصال بقاعدة البيانات باستخدام الرابط الموجود في ملف .env
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // طباعة رسالة نجاح الاتصال مع اسم الـ Host
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (err) {

        // طباعة الخطأ في حالة فشل الاتصال
        console.log(err);

        // إيقاف تشغيل السيرفر لأن قاعدة البيانات لم تتصل
        process.exit(1);
    }
};

// تصدير الدالة لاستخدامها في app.js
module.exports = connectDB;