const express = require('express');
const fetchuser = require('../../middleware/fetchuser');
const router = express.Router();
const Order = require('../../db/models/order');

// ROUTE1: Endpoint for fetching all the notes /api/notes/fetchnotes : login required
router.get('/fetchorders', fetchuser, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
})

// ROUTE2: Endpoint for placing a new order /api/order/neworder : login required
router.post('/neworder', fetchuser, async (req, res) => {
    try {
        const { food, price } = req.body;

        const order = new Order({
            food, price, user: req.user.id
        })
        const savedOrder = await order.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
})

// Route3: Endpoint for cancelling a new order /api/order/cancelorder : login required
router.delete('/cancelorder', fetchuser, async (req, res) => {
    try {
        const { orderID } = req.body;
        const order = await Order.findById(orderID);

        if (!order) {
            return res.status(404).json({ success: false, error: 'Order not found' });
        }

        // Calculate the time difference in minutes
        const currentTime = new Date();
        const orderedAtTime = new Date(order.orderedAt);
        const timeDifferenceMinutes = (currentTime - orderedAtTime) / (1000 * 60);

        // Check if the time difference is less than 2 minutes
        if (timeDifferenceMinutes < 2) {
            const deletedOrder = await Order.findByIdAndDelete(orderID);
            res.json({ success: true, message: 'Order canceled successfully', deletedOrder });
        } else {
            // Send a 400 status with an error message
            res.status(400).json({ success: false, error: 'Cannot cancel order, time duration exceeded' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router