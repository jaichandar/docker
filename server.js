const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config({});
const PORT = process.env.PORT || 9090;

app.use(morgan('dev'));

app.get('/api/v1/docker', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Node application is Dockerized"
    })
})

app.listen(PORT, () => {
    console.log(`DOCKER APPLICATION RUNNING ON PORT: ${PORT}`);
})