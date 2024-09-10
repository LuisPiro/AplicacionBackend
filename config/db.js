const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // No necesitas 'useNewUrlParser' ni 'useUnifiedTopology'
    });
    console.log('Conected to MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1); // Detener el servidor en caso de error
  }
};

connectDB();

module.exports = mongoose;
