# Backend Authentication System

This is the backend part of a simple authentication system built with Node.js, Express, and MongoDB. It allows users to register, log in, and manage their sessions using JSON Web Tokens (JWT).

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Overview
This backend API provides user authentication functionality, including registration, login, and session management using JWT. The backend communicates with MongoDB to store user data (email and hashed passwords) and handles authentication requests.

### Features
- **User Registration**: Allows new users to register with email and password. Passwords are securely hashed using bcrypt.
- **User Login**: Registered users can log in with their email and password. Upon successful login, a JWT is returned.
- **JWT Authentication**: The JWT is used for secure user sessions and has an expiration time of 30 minutes.
- **Token Expiration & Logout**: When the token expires or the user logs out, the token is removed from localStorage, and the user is redirected to the login page.

## Technologies Used
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Hashing**: bcryptjs for password hashing
- **Environment Variables**: dotenv for managing sensitive data (e.g., JWT secret)

## Installation Instructions

### Prerequisites
Before you start, ensure you have the following installed:
- Node.js
- npm or yarn
- MongoDB (or MongoDB Atlas for cloud hosting)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/backend-auth-app.git
   cd backend-auth-app
