const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    food: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    availibility: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imageURL: {
        type: String
    },
    description: {
        type: String,
        required: true
    }
});

FoodSchema.index({ food: 'text', description: 'text' });

module.exports = mongoose.model('foods', FoodSchema);