# 📝 Blogosphere MERN Application

## 📑 Table of Contents
- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [File Structure](#file-structure)
- [Installation Guide](#installation-guide)
- [Contribution](#contribution)
- [Contact Us](#contact-us)

---

## 🚀 Introduction
Welcome to **Blogosphere** – your go-to destination for a feature-rich and immersive blogging experience! Crafted using the **MERN stack**, Blogosphere provides a seamless platform for both writers and readers, with a focus on style, functionality, and security.

---

## 🔑 Key Features
- **User Authentication & Authorization:** Secure sign-up and login using **JWT**, **Bcryptjs**, and **secure cookies**.
- **Blog Operations:** Create, edit, and personalize blog posts with a dynamic content interface.
- **Contact Page with Nodemailer:** Easily get in touch with us using the Contact Us form integrated with **Nodemailer**.
- **Landing Page:** An engaging homepage to introduce visitors to the app.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.

---

## ⚙️ Technology Stack
- **MongoDB** – NoSQL database for storing blog and user data.
- **Express.js** – Backend framework to manage routes and APIs.
- **React.js** – Frontend library for building dynamic interfaces.
- **Node.js** – Backend runtime to handle server-side logic.
- **JWT, Bcryptjs, Cookies** – Secure user authentication and authorization.
- **Nodemailer** – Handles email sending from the Contact Us page.

---

## 🚀 Installation Guide

Follow these steps to install and run the Blogosphere MERN Application:

---

### 📦 A. Client (Frontend) Installation

1. **Navigate to the client folder:**
   ```bash
   cd client
Install Frontend Dependencies:

bash
Copy
Edit
npm install
Configure Environment Variables:

Rename .env.example to .env

Add your server API base URL:

ini
Copy
Edit
REACT_APP_API_BASE_URL=http://your-server-api-link
Start the Development Server:

bash
Copy
Edit
npm start
The frontend will run on: http://localhost:3000

⚙️ B. Server (Backend) Installation
Navigate to the server folder:

bash
Copy
Edit
cd server
Install Backend Dependencies:

bash
Copy
Edit
npm install
Configure Environment Variables:

Rename .env.example to .env

Add the following variables:

ini
Copy
Edit
MONGO_URI=mongodb://your-mongo-uri
JWT_SECRET=your-jwt-secret
Run the Server in Development Mode:

bash
Copy
Edit
npm run dev
(Optional) Run the Server in Production Mode:

bash
Copy
Edit
npm start
After completing both setups:

Frontend will be available at: http://localhost:3000

Backend will run at: http://localhost:4000 (default)
