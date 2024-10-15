const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
const register = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json(user);
};

// Login user
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('User not found.');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials.');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set token in a cookie
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' }); // Set secure flag in production
    res.json({ message: 'Logged in successfully' });
};

// Logout user
const logout = (req, res) => {
    res.clearCookie('token'); // Clear the token cookie
    res.json({ message: 'Logged out successfully' });
};


module.exports = {
    register,
    login,
    logout
}