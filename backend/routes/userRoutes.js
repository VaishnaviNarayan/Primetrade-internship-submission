const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// Route: /api/users/
router.post('/', registerUser);

// Route: /api/users/login
router.post('/login', loginUser);

module.exports = router;
