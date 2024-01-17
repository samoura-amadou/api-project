// routes.js
const express = require('express');
const router = express.Router();
const { httpRequestDurationMicroseconds } = require('./matrics');

// Define endpoints
router.get('/endpoint', (req, res) => {
    const end = httpRequestDurationMicroseconds.startTimer();
    
    // Logic for the endpoint

    end({ method: req.method, route: req.route.path, code: res.statusCode });
    res.send('Response');
});

module.exports = router;
