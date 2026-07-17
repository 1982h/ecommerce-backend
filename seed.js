// تحميل متغيرات البيئة من ملف .env
require('dotenv').config();

// استيراد مكتبة Mongoose للتعامل مع MongoDB
const mongoose = require('mongoose');

// استيراد نموذج (Model) المنتجات
const Product = require('./models/Product');

// الاتصال بقاعدة بيانات MongoDB
mongoose
  .connect(process.env.MONGO_URI)

  // في حالة نجاح الاتصال
  .then(() => console.log('MongoDB Connected'))

  // في حالة فشل الاتصال
  .catch(err => console.log(err));

// بيانات المنتجات التي سيتم إضافتها إلى قاعدة البيانات
const products = [
  {
    title: "The Dark Knight",
    genre: "Action",
    price: 250,
    rating: 9.0,
    sales: true
  },
  {
    title: "Inception",
    genre: "Sci-Fi",
    price: 220,
    rating: 8.8,
    sales: true
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    price: 300,
    rating: 8.7,
    sales: false
  },
  {
    title: "Avengers: Endgame",
    genre: "Action",
    price: 280,
    rating: 8.4,
    sales: true
  },
  {
    title: "Titanic",
    genre: "Romance",
    price: 180,
    rating: 7.9,
    sales: false
  },
  {
    title: "Joker",
    genre: "Drama",
    price: 240,
    rating: 8.5,
    sales: true
  },
  {
    title: "Spider-Man: No Way Home",
    genre: "Action",
    price: 270,
    rating: 8.3,
    sales: true
  },
  {
    title: "The Lion King",
    genre: "Animation",
    price: 170,
    rating: 8.5,
    sales: false
  },
  {
    title: "Frozen",
    genre: "Animation",
    price: 160,
    rating: 7.5,
    sales: true
  },
  {
    title: "John Wick",
    genre: "Action",
    price: 230,
    rating: 8.2,
    sales: true
  }
];

// دالة لإضافة البيانات التجريبية (Seed Data) إلى قاعدة البيانات
const seedDB = async () => {
  try {

    // حذف جميع المنتجات القديمة من قاعدة البيانات
    await Product.deleteMany();
    console.log("Old Products Deleted");

    // إضافة جميع المنتجات الموجودة في المصفوفة
    await Product.insertMany(products);
    console.log("Products Inserted Successfully");

    // إنهاء البرنامج بعد نجاح العملية
    process.exit();

  } catch (err) {

    // طباعة الخطأ إذا حدثت مشكلة أثناء الحذف أو الإضافة
    console.log(err);

    // إنهاء البرنامج مع الإشارة إلى وجود خطأ
    process.exit(1);
  }
};

// استدعاء الدالة لبدء عملية إدخال البيانات
seedDB();