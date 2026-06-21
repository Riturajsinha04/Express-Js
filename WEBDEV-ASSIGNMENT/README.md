# 📱 Mobile Store Management System

A complete **Mobile Store Management System** built using **Node.js, Express.js, MongoDB, Mongoose, and EJS**.

This project is a simple CRUD-based web application where users can manage mobile phone records. Users can add new mobiles, view all mobiles, edit existing mobile details, delete records, and search mobiles by brand name.

---

## 📌 Project Overview

The **Mobile Store Management System** is designed to manage mobile phone inventory data.

Each mobile record contains:

- Brand
- Model
- RAM
- Storage
- Price

This project follows a clean MVC-style structure using:

- **Model** for database schema
- **Controller** for business logic
- **Routes** for URL handling
- **Views** for frontend pages

---

## 🚀 Features

### ✅ Add Mobile

Users can add a new mobile phone record with brand, model, RAM, storage, and price.

### ✅ View All Mobiles

Users can view all mobile records stored in the MongoDB database.

### ✅ Edit Mobile

Users can update existing mobile details.

### ✅ Delete Mobile

Users can delete a mobile record from the database.

### ✅ Search by Brand

Users can search mobile phones by brand name.

### ✅ MongoDB Integration

All mobile data is stored in MongoDB using Mongoose.

### ✅ EJS Frontend

Frontend pages are created using EJS templates.

---

## 🛠️ Technologies Used

| Technology | Use |
|---|---|
| HTML | Page structure |
| CSS | Styling |
| JavaScript | Backend logic |
| Node.js | Runtime environment |
| Express.js | Server and routing |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| EJS | Template engine |
| Nodemon | Auto restart server |

---

## 📁 Project Structure

```txt
WEBDEV-ASSIGNMENT
│
├── config
│   └── db.js
│
├── controllers
│   └── mobileController.js
│
├── models
│   └── mobile.js
│
├── node_modules
│
├── public
│
├── routes
│   └── mobileRoutes.js
│
├── views
│   ├── home.ejs
│   ├── form.ejs
│   ├── edit.ejs
│   └── mobiles.ejs
│
├── app.js
├── package.json
├── package-lock.json
└── README.md


Installation and Running
step-1: git clone <your-github-repository-link>
step-2: cd WEBDEV-ASSIGNMENT
step-3: npm install
step4: npm install express mongoose ejs
step-5: npm install nodemon
step-6: nodemon app.js  or   node app.js