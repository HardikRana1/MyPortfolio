const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Delete all products
exports.deleteAllProducts = async (req, res) => {
    try {
      await Product.deleteMany();
      res.status(200).json({ message: 'All products deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  // Get products by name containing keyword (using GET request)
exports.getProductsByName = async (req, res) => {
    try {
      const keyword = req.query.name;
      const products = await Product.find({ name: new RegExp(keyword, 'i') });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Get products by name containing keyword (using POST request)
  exports.getProductsByNamePost = async (req, res) => {
    try {
      const keyword = req.body.name;
      const products = await Product.find({ name: new RegExp(keyword, 'i') });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
