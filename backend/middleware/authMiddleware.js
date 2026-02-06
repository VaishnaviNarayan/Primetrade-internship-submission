const jwt = require('jsonwebtoken');
const User = require('../models/User');

// 1. Protect Logic (The Guard Checking the ID Card)
const protect = async (req, res, next) => {
    let token;

    // Check if header has specific format: "Bearer <token>"
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from the token id (exclude password)
            req.user = await User.findById(decoded.id).select('-password');

            next(); // Access Granted! Go to next step.
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

// 2. Admin Logic (The Manager Only Access)
const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next(); // Access Granted!
    } else {
        res.status(401).json({ message: 'Not authorized as an admin' });
    }
};

module.exports = { protect, admin };
