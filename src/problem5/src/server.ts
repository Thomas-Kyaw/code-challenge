import express from 'express';
import cors from 'cors';
import resourceRoutes from './routes/resource';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/resources', resourceRoutes);

// Health check
app.get('/', (req, res) => {
    res.send('Problem 5 Crude Server is running');
});

// Start server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;
