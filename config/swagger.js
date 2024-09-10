const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // o '2.0' para Swagger 2.0
    info: {
      title: 'Gestion de usuarios y productos',
      description: 'Documentacion de la base de datos',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:5000', // URL del servidor de desarrollo
        description: 'Servidor de Desarrollo',
      },
    ],
  },
  apis: ['./routes/userRoutes.js', './routes/productRoutes.js'], // Incluye ambas rutas
};

module.exports = swaggerOptions;
