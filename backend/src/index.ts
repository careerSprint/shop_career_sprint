import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Shop API is running' });
});

app.get('/api/products', (req, res) => {
  res.json({
    products: [
      {
        id: 1,
        name: 'Sample Product 1',
        price: 29.99,
        description: 'This is a sample product',
        category: 'electronics'
      },
      {
        id: 2,
        name: 'Sample Product 2',
        price: 19.99,
        description: 'Another sample product',
        category: 'clothing'
      }
    ]
  });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
