# Second Brain

A personal knowledge management system built with React frontend and Node.js backend, designed to help you capture, organize, and retrieve information efficiently.

## 🚀 Features

- **Content Management**: Store and organize articles, links, and resources
- **Tag System**: Categorize content with custom tags for easy discovery
- **User Authentication**: Secure user accounts with JWT authentication
- **Modern UI**: Clean, responsive interface built with React and Tailwind CSS
- **MongoDB Integration**: Robust data storage with MongoDB Atlas

## 🏗️ Project Structure

```
second_brain/
├── frontend/          # React + TypeScript frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── App.tsx        # Main application component
│   │   └── main.tsx       # Application entry point
│   ├── package.json
│   └── vite.config.ts     # Vite configuration
├── backend/           # Node.js + Express backend
│   ├── src/
│   │   ├── db.ts          # Database connection and models
│   │   ├── index.ts       # Server entry point
│   │   └── middleware.ts  # Authentication middleware
│   ├── .env               # Environment variables (not tracked)
│   ├── .env.example       # Environment variables template
│   └── package.json
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **ESLint** - Code linting

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd second_brain
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Environment Configuration**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env with your MongoDB connection string
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will be available at `http://localhost:3000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

## 📊 Database Schema

### User Model
```typescript
{
  username: string (unique),
  password: string
}
```

### Content Model
```typescript
{
  title: string,
  link: string,
  tags: ObjectId[] (references to Tag model),
  userId: ObjectId (references to User model, required)
}
```

## 🔧 Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority

# Server Configuration
PORT=3000

# JWT Secret for authentication
JWT_SECRET=your_jwt_secret_here
```

## 📝 Available Scripts

### Backend Scripts
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start the production server
- `npm run dev` - Build and start the development server

### Frontend Scripts
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔒 Security Features

- Environment variables for sensitive data
- JWT-based authentication
- Password hashing (implement as needed)
- CORS configuration
- Input validation and sanitization

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Build the TypeScript code: `npm run build`
3. Start the server: `npm start`

### Frontend Deployment
1. Build the production bundle: `npm run build`
2. Deploy the `dist` folder to your hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

---

**Happy Knowledge Building! 🧠✨**
