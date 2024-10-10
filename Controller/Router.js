const express = require('express');
const routes = express();
const path = require('path');



routes.get('/', (req, res) => {
    res.send("Hello");
})

module.exports= routes;