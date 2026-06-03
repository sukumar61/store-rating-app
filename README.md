# Store Rating Application

A Full Stack Web Application that allows users to register, browse stores, submit ratings, and view store ratings. The platform supports different user roles such as Admin, Store Owner, and Normal User.

---

# Project Overview

This application is built as part of a Full Stack Intern Coding Challenge.

The system allows:

- Users to sign up and log in
- Users to browse stores
- Users to submit ratings for stores
- Store owners to view ratings received for their stores
- Admins to manage users and stores

---

# Tech Stack

## Frontend
- React.js
- React Router
- CSS

## Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt Password Hashing

## Database
- MariaDB / MySQL

---

# User Roles

## 1. Admin

Admin can:

- Login securely
- Add new stores
- Add new users
- View all stores
- View all users
- View all ratings
- Filter and search users/stores
- Manage store owners

---

## 2. Normal User

User can:

- Register account
- Login
- View all stores
- Search stores
- Submit rating
- Update rating
- View their submitted ratings

---

## 3. Store Owner

Store Owner can:

- Login
- View own store details
- View ratings received
- View average rating of store
- Monitor user feedback

---

# Features

## Authentication

- User Registration
- User Login
- JWT Token Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Access Control

---

## Store Management

- Create Store
- View Stores
- Search Stores
- Store Details

---

## Rating Management

- Add Rating
- Update Rating
- View Ratings
- Average Rating Calculation

---

# Database Schema

## users

| Column | Type |
|----------|----------|
| id | INT |
| name | VARCHAR |
| email | VARCHAR |
| password | VARCHAR |
| address | TEXT |
| role | ENUM('ADMIN','OWNER','USER') |

---

## stores

| Column | Type |
|----------|----------|
| id | INT |
| name | VARCHAR |
| email | VARCHAR |
| address | TEXT |
| owner_id | INT |

---

## ratings

| Column | Type |
|----------|----------|
| id | INT |
| user_id | INT |
| store_id | INT |
| rating | INT |

---

# Project Structure

Backend

```
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── storeController.js
│   └── ratingController.js
│
├── middleware/
│   ├── authenticateUser.js
│   └── authorizeRoles.js
│
├── routes/
│   ├── authRoutes.js
│   ├── storeRoutes.js
│   └── ratingRoutes.js
│
├── validators/
│
├── server.js
└── package.json
```

Frontend

```
frontend/
│
├── src/
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
└── package.json
```

---

# API Endpoints

## Authentication

### Register

POST

```
/api/auth/signup
```

Request

```json
{
  "name":"John",
  "email":"john@gmail.com",
  "password":"123456",
  "address":"Hyderabad"
}
```

---

### Login

POST

```
/api/auth/login
```

Request

```json
{
  "email":"john@gmail.com",
  "password":"123456"
}
```

Response

```json
{
  "token":"JWT_TOKEN"
}
```

---

## Stores

### Get All Stores

GET

```
/api/stores
```

---

### Create Store

POST

```
/api/stores
```

Admin Only

---

## Ratings

### Submit Rating

POST

```
/api/ratings
```

Request

```json
{
  "store_id":1,
  "rating":4
}
```

---

### Update Rating

PUT

```
/api/ratings/:id
```

---

# Security Features

- JWT Authentication
- Password Encryption using bcrypt
- Protected APIs
- Role-Based Authorization
- Input Validation
- Error Handling

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/store-rating-app.git
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=store_rating_db

JWT_SECRET=your_secret_key
```

Start Backend

```bash
npm start
```

or

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Future Enhancements

- Dashboard Analytics
- Store Images
- User Profile Management
- Pagination
- Email Verification
- Forgot Password
- Dark Mode
- Rating Charts
- Review Comments

---

# Current Progress

✅ MariaDB Connection Completed

✅ User Registration Completed

✅ Login Completed

✅ bcrypt Password Hashing Completed

✅ JWT Authentication Completed

✅ authenticateUser Middleware Completed

✅ authorizeRoles Middleware Completed

✅ Role-Based Access Control Completed

🔄 Store APIs In Progress

🔄 Rating APIs In Progress

🔄 React Frontend In Progress

---

# Author

**Sukumar Renukuntla**

Full Stack Developer (Learning)

Tech Stack:
- Java
- JavaScript
- React.js
- Node.js
- Express.js
- MariaDB/MySQL

---

# License

This project is developed for educational and internship assessment purposes.
