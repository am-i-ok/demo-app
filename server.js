'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/api/resource-x', (req, res) => {
    res.status(200);
    res.json({status: 200, data: "all GOOD!"});
});

app.get('/api/resource-y', (req, res) => {
    res.status(400);
    res.json({status: 400, data: "very BAD!"});
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});