# Visual Product Matcher

A modern web application that uses AI-powered visual similarity matching to find similar products based on uploaded images. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and features a decoupled architecture with perceptual hashing for image comparison.

## 🚀 Features

- **Image Upload**: Drag-and-drop or click-to-upload interface
- **Visual Similarity Matching**: Uses perceptual hashing to find similar products
- **Real-time Results**: Fast similarity scoring with Hamming distance calculation
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Similarity Filtering**: Adjustable slider to filter results by similarity score
- **Loading States**: Smooth loading indicators and error handling
- **Modern UI**: Clean, professional interface with hover effects and animations

## 🛠 Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Sharp** for image processing
- **Multer** for file upload handling
- **Perceptual Hashing** for image similarity calculation

### Frontend
- **React.js** with Hooks (useState, useEffect)
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Axios** for API communication
- **Lucide React** for icons

## 📁 Project Structure

```
Visual Product Matcher/
├── backend/                
│   ├── models/
│   │   └── productModel.js     
│   ├── seed/
│   │   └── seed.js 
│   ├── utils/
│   │   └── embed.js  
│   │    └── similarity.js
│   │
│   ├── .env               
│   ├── package.json
│   └── server.js          
└── frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UploadForm.jsx
│   │   ├── ProductCard.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── tailwind.config.js

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### 1. Clone & Setup
```bash
# Clone the repository
git clone <repository-url>
cd "Visual Product Matcher"

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/visual-product-matcher
NODE_ENV=development
```

### 3. Database Setup
```bash
# Make sure MongoDB is running, then seed the database
cd backend
npm run seed
```

### 4. Start the Application
```bash
# Terminal 1: Start the backend server
cd backend
npm run dev

# Terminal 2: Start the frontend development server
cd frontend
npm run dev
```

### 5. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📊 How It Works

### Perceptual Hashing Algorithm
1. **Image Processing**: Uploaded images are resized to 8x8 grayscale
2. **Average Calculation**: Calculate the average pixel value
3. **Binary Hash**: Create a 64-bit binary hash based on pixel comparisons
4. **Hex Conversion**: Convert to hexadecimal for efficient storage

### Similarity Matching
1. **Hash Comparison**: Calculate Hamming distance between hashes
2. **Scoring**: Lower scores indicate higher similarity (0 = identical)
3. **Ranking**: Results sorted by similarity score
4. **Filtering**: Client-side filtering based on similarity threshold

## 🎯 API Endpoints

### `GET /api/health`
Check server status

### `GET /api/products`
Get all products (without image hashes)

### `POST /api/products/find-similar`
Find similar products by uploading an image
- **Body**: FormData with 'image' file
- **Returns**: Array of similar products with similarity scores

## 🗄 Database Schema

### Product Model
```javascript
{
  name: String,           // Product name
  category: String,       // Product category
  imageUrl: String,       // Image URL
  imageHash: String,      // Perceptual hash (hex)
  createdAt: Date,        // Auto-generated timestamp
  updatedAt: Date         // Auto-generated timestamp
}
```


### Backend
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run seed       # Seed database with sample products
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 🚀 Deployment Considerations

### Backend Deployment
- Set production environment variables
- Configure MongoDB connection string
- Set up proper CORS origins
- Enable compression and security middleware

### Frontend Deployment
- Update API base URL for production
- Build optimized production bundle
- Configure web server for SPA routing
- Set up CDN for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## � Deployment

### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the following configuration:
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Environment Variables**:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `NODE_ENV`: `production`
     - `PORT`: `5000` (or leave empty for auto-assignment)

### Frontend Deployment (Vercel)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root
3. Set environment variables in Vercel dashboard:
   - `VITE_API_URL`: Your Render backend URL (e.g., `https://your-app.onrender.com/api`)

### Environment Variables Setup

**backend (.env)**:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/visual-product-matcher
NODE_ENV=production
```

**frontend (.env.production)**:
```env
VITE_API_URL=https://your-backend-app.onrender.com/api
```

