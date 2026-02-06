const express = require('express');
const router = express.Router();
const {
    getProducts,
    createProduct,
    deleteProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

// Public Route (View)
router.get('/', getProducts);

// Protected Admin Routes (Create/Delete)
// Notice how we put 'protect' AND 'admin' as guards
router.post('/', protect, admin, createProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;
