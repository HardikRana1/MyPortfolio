const express = require('express');
const router = express.Router();
const productController = require('../controllers/productcontroller');

// CRUD Routes
// Search routes
router.get('/search', productController.getProductsByName);
router.post('/search', productController.getProductsByNamePost);

router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.delete('/', productController.deleteAllProducts);

module.exports = router;
