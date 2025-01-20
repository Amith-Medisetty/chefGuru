const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config(); 

router.post('/', async (req, res) => {
    const { message } = req.body;
    const apiKey = process.env.API_KEY;

    try {
        const response = await axios.post('https://gemini.googleapis.com/v1/messages', {
            message,
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

module.exports = router;
