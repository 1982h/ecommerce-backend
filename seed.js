require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

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

const seedDB = async () => {
  try {
    await Product.deleteMany();
    console.log("Old Products Deleted");

    await Product.insertMany(products);
    console.log("Products Inserted Successfully");

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedDB();