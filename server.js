const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/db');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const swaggerOptions = require('./config/swagger');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Swagger setup
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
