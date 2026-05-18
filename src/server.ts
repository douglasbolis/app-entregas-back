import express from 'express';
import cors from 'cors';

// Import route files
import authRoutes from './routes/authRoutes';
import deliveryRoutes from './routes/deliveryRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse incoming JSON requests

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/deliveries', deliveryRoutes);

// Basic health check route
app.get('/', (req, res) => {
  res.send('Delivery App Backend is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
