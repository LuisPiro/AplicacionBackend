const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const user = req.user._id;

  try {
    const product = await Product.create({ name, price, description, user });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user._id });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
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
