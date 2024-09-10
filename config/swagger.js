const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API de Autenticación y Productos',
        version: '1.0.0',
        description: 'API para manejar usuarios y productos con autenticación usando JWT',
      },
      servers: [
        {
          url: 'http://localhost:5000/users/register',
          description: 'Servidor de desarrollo',
        },
      ],
    },
    apis: ['./routes/userRoutes.js'], // Aquí se incluyen las rutas donde tienes tus endpoints
  };
  
  module.exports = swaggerOptions;
  