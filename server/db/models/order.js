const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodOrderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    food: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    orderedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('orders', FoodOrderSchema);