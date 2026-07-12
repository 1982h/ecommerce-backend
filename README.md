# 🛒 E-Commerce Backend API

A RESTful Backend API for an E-Commerce application built with **Node.js**, **Express.js**, and **MongoDB**.

## 🚀 Features

- Product CRUD Operations
- Shopping Cart API
- MongoDB Database
- Mongoose ODM
- Error Handling Middleware
- Environment Variables (.env)
- CORS Support
- Seed Script for Sample Data

---

# 📁 Project Structure

```
ecommerce-backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── productcontrollers.js
│   └── cartcontroller.js
│
├── middleware/
│   └── errorhandler.js
│
├── models/
│   ├── Product.js
│   └── Cart.js
│
├── routes/
│   ├── productroutes.js
│   └── cartroutes.js
│
├── servise/
│   ├── product.js
│   └── cart.js
│
├── app.js
├── seed.js
├── package.json
├── .env
└── README.md
```

---

# 🛠 Technologies

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- cors

---

# 📦 Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to the project folder

```bash
cd ecommerce-backend
```

Install dependencies

```bash
npm install
```

---

# ⚙ Environment Variables

Create a `.env` file.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

---

# ▶ Run the Project

```bash
node app.js
```

or

```bash
npm start
```

---

# 🌱 Seed Database

Insert sample products into MongoDB.

```bash
node seed.js
```

or

```bash
npm run seed
```

---

# 📌 API Endpoints

## Products

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /products | Get all products |
| GET | /products/:id | Get product by ID |
| POST | /products | Create new product |
| PUT | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

---

## Cart

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /cart | Get cart |
| POST | /cart | Add product to cart |
| DELETE | /cart/:id | Remove product from cart |

---

# 📄 Product Model

```javascript
{
    title: String,
    genre: String,
    price: Number,
    rating: Number,
    sales: Boolean
}
```

---

# 📄 Example Product

```json
{
    "title": "John Wick",
    "genre": "Action",
    "price": 230,
    "rating": 8.2,
    "sales": true
}
```

---

# 🧪 Testing

You can test the API using:

- Postman
- Thunder Client
- Insomnia

---

# 👨‍💻 Author

**Mohamed Saied Amer**

Backend Project - E-Commerce API

Built with ❤️ using Node.js & Express.