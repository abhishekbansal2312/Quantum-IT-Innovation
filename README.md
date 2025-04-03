# React-Node Login and Registration System

A full-stack application featuring user authentication with React.js frontend and Node.js backend.

## Live Demo

- Frontend: [https://quantum-it-innovation-eight.vercel.app/](https://quantum-it-innovation-eight.vercel.app/)
- Backend API: [https://quantum-it-innovation-becs.onrender.com](https://quantum-it-innovation-becs.onrender.com)

## Features

- User registration with name, date of birth, email, and password
- User login with email and password
- JWT-based authentication
- Protected routes
- User dashboard with data table
- MongoDB integration

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   └── redux/          # Redux state management
└── server/                 # Node.js backend
    ├── config/             # Database configuration
    ├── controllers/        # Request handlers
    ├── middleware/         # Custom middleware
    ├── models/             # MongoDB models
    └── routes/             # API route definitions
```

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB (local or Atlas)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/abhishekbansal2312/quantum-it-innovation.git
cd abhishekbansal2312-quantum-it-innovation
```

2. Install dependencies:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Configure environment variables:
   - Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

## Running the Application

### Development Mode

1. Start the backend server:

```bash
cd server
npm run dev
```

2. Start the frontend development server:

```bash
cd client
npm run dev
```

The client will be available at http://localhost:5173
The server will be running at http://localhost:5000

### Production Build

1. Build the React frontend:

```bash
cd client
npm run build
```

2. Start the Node.js server:

```bash
cd server
npm start
```

## API Endpoints

### Authentication

- **POST /api/auth/register** - Register a new user

  - Request Body: `{ "name": "", "email": "", "password": "", "dateOfBirth": "" }`

- **POST /api/auth/login** - Login a user
  - Request Body: `{ email, password }`
  - Response: `{ token, user }`

## Frontend Routes

- **/** - Home page
- **/login** - User login
- **/register** - User registration
- **/dashboard** - Protected dashboard (requires authentication)

## Technologies Used

### Frontend

- React.js
- Redux Toolkit for state management
- React Router for navigation
- Vite as the build tool
- Tailwind CSS for styling

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing

## Deployment

### Frontend Deployment (Vercel)

The React frontend is deployed on Vercel:

1. Connect your GitHub repository to Vercel
2. Set the root directory to `client`
3. Set the build command to `npm run build`
4. Set the output directory to `dist`
5. Configure environment variables in the Vercel dashboard

### Backend Deployment (Render)

The Node.js backend is deployed on Render:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the root directory to `server`
4. Set the build command to `npm install`
5. Set the start command to `npm start`
6. Configure environment variables in the Render dashboard

## Author

Abhishek Bansal
