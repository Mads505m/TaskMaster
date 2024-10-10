const express = require('express');
const path = require('path');
routes= express.Router();


routes.get('/', (req, res) => {
    res.send("Hello");
})

module.exports= routes;


