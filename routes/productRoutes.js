const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, productController.createProduct);
router.get('/', protect, productController.getAllProducts);

// Otras rutas para actualizar y eliminar productos...

module.exports = router;
