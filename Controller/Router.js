const express = require('express');
const path = require('path');
routes= express.Router();

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../View/Public/Home.html'));
})

module.exports= routes;


