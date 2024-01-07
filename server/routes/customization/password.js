const express = require('express');
const router = express.Router();
const User = require('../../db/models/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../../middleware/fetchuser');
const secretKey = process.env.SECRET_KEY;

// ROUTE1: Update password of logged in user. Endpoint: /api/auth/updatepassword : login required
router.put('/updatepassword', fetchuser, [
    body("newPassword")
        .isString()
        .isLength({ min: 8 })
        .not()
        .isLowercase() 
        .not()
        .isUppercase()
        .not()
        .isNumeric()
        .not()
        .isAlpha()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    const { username, password } = req.body;
    // If password doesn't contain minimum 8 characters, including minimum one uppercase, one lowercase and one special character return bad request
    if (!errors.isEmpty() && errors.errors[0].path === 'newPassword') {
        return res.status(400).json({ success, error: 'Password must contain 8 characters, which includes minimum one uppercase, one lowercase and one special character' });
    }

    try {
        // Find the user by username
        let user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ success, error: "Please login with correct credentials" });
        }

        // Compare the provided password with the hashed password in the database
        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword) {
            return res.status(400).json({ success, error: "Old password did not match" });
        }

        // Hash the updated password before updating it in the database
        const salt = await bcrypt.genSalt(10);
        const securedPassword = await bcrypt.hash(req.body.newPassword, salt);

        // Send a response if the old and the new password are same
        const checkMatch = await bcrypt.compare(password, securedPassword);
        if (checkMatch) {
            return res.status(400).json({ success, error: "New password cannot be the same as the old password" });
        }

        // Update the user's password in the database
        user.password = securedPassword;
        await user.save();

        success = true;
        res.json({ success, message: 'Password updated successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router