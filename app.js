const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// استيراد دالة الاتصال بقاعدة البيانات
const connectDB = require("./config/db");

// استيراد مسارات المنتجات والسلة
const productroutes = require("./routes/productroutes");
const cartroutes = require("./routes/cartroutes");

// استيراد Middleware لمعالجة الأخطاء
const errorHandler = require("./middleware/errorhandler");

// تحميل متغيرات البيئة من ملف .env
dotenv.config();

// الاتصال بقاعدة بيانات MongoDB
connectDB();

// إنشاء تطبيق Express
const app = express();

// السماح للـ Frontend بالاتصال بالـ API
app.use(cors());

// تحويل البيانات المرسلة بصيغة JSON إلى كائن JavaScript داخل req.body
app.use(express.json());

// ==================== Routes ====================

// جميع الطلبات التي تبدأ بـ /products يتم توجيهها إلى productroutes
app.use("/products", productroutes);

// جميع الطلبات التي تبدأ بـ /cart يتم توجيهها إلى cartroutes
app.use("/cart", cartroutes);

// الصفحة الرئيسية للتأكد من أن السيرفر يعمل
app.get("/", (req, res) => {
    res.send("E-Commerce API Running...");
});

// ================= Error Handler =================

// Middleware لمعالجة الأخطاء في جميع أجزاء التطبيق
app.use(errorHandler);

// تحديد رقم المنفذ (PORT)
// إذا لم يوجد في ملف .env يستخدم المنفذ 5000
const PORT = process.env.PORT || 5000;

// تشغيل السيرفر والاستماع للطلبات القادمة
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});