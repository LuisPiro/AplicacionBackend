const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/db');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const swaggerOptions = require('./config/swagger');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Configura CORS si es necesario

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Swagger setup
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo salió mal' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
