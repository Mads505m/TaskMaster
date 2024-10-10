const express = require('express');
const path = require('path');
const {static} = require("express");
const app = express();
const router = express.Router();
const routes = require('./Router.js');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(static(path.join(__dirname,'..','View', 'Public')));
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.originalUrl}`);
    next();
})

app.use('/', routes);



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})