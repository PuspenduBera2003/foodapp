const express = require('express');
const fetchuser = require('../../middleware/fetchuser');
const router = express.Router();
const Food = require('../../db/models/food');
const NonVegTerms = require('./NonVegTerms');

// Route1: For finding all food
router.get('/all', async (req, res) => {
    let success = false;
    try {
        const food = await Food.find({ __v: 0 });
        success = true;
        res.status(200).json({ success, food });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success, error: 'Server error.' });
    }
})

// Route2: For Searching foods
router.post('/search', async (req, res) => {
    let { food } = req.body;
    food = food.trim();
    let success = false;
    try {
        // Check if there are any matching non-veg foods
        const foodLowerCase = food.toLowerCase();
        const matchingFoods = NonVegTerms.filter(term => term.toLowerCase() === foodLowerCase);
        const regex = new RegExp(food, 'i');
        if (matchingFoods.length !== 0) {
            return res.status(200).json({ success, errorcode: 'NVGSRCH', error: 'Non Veg Item Searched!!!' });
        }
        let foodsOfType = await Food.find({ type: regex });
        let foodsOfFood = await Food.find({ food: regex });
        let foodsOfDescription = await Food.find({ description: regex });

        // Extract _id property to identify duplicates
        const getId = food => food._id;

        // Convert the results to arrays and remove duplicates based on _id
        foodsOfType = Array.from(new Set(foodsOfType.map(getId)));
        foodsOfFood = Array.from(new Set(foodsOfFood.map(getId)));
        foodsOfDescription = Array.from(new Set(foodsOfDescription.map(getId)));

        // Concatenate the arrays
        const temp = foodsOfType.concat(foodsOfFood, foodsOfDescription);

        // Fetch the unique foods based on _id
        const uniqueFoods = await Food.find({ _id: { $in: temp } });

        console.log(uniqueFoods.length);
        success = true;
        res.json({ success, food: uniqueFoods });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success, errorcode: 'SERVER', error: 'Server error.' });
    }
});

// Router3: Find foods by type
router.get('/:type', async (req, res) => {
    let success = false;
    try {
        const regex = new RegExp(req.params.type, 'i');
        const foodByType = await Food.find({ type: regex });
        success = true;
        return res.status(200).json({ success, food: foodByType })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success, error: 'Server error.' });
    }
})

// Router4: Find foods by type
router.get('/id/:id', async (req, res) => {
    let success = false;
    try {
        const foodByID = await Food.findById(req.params.id);
        success = true;
        return res.status(200).json({ success, food: foodByID })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success, error: 'Server error.' });
    }
})


// Router5: Randomly Select 10 result 
router.post('/random/:n', async (req, res) => {
    try {
        const number = parseInt(req.params.n, 10);
        const randomFoods = await Food.aggregate(
            [
                { $sample: { size: number } }
            ]
        );
        res.status(200).json({ success: true, food: randomFoods })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server error.' })
    }
})


module.exports = router