const Product = require('../models/productModel');

// Crear producto
exports.createProduct = async (req, res) => {
  const { name, description, price } = req.body;

  const product = new Product({
    name,
    description,
    price,
    user: req.user._id,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

// Obtener productos
exports.getProducts = async (req, res) => {
  const products = await Product.find({ user: req.user._id });
  res.json(products);
};

// Actualizar producto
exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product && product.user.equals(req.user._id)) {
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};

// Eliminar producto
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product && product.user.equals(req.user._id)) {
    await product.remove();
    res.json({ message: 'Producto eliminado' });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};
