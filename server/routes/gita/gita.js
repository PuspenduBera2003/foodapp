const express = require('express');
const router = express.Router();

router.post('/getshloka', async (req, res) => {
    const { chapter, shloka } = req.body;
    const url = `http://bhagavadgitaapi.in/slok/${chapter}/${shloka}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;