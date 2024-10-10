const express = require('express');
const path = require('path');
const routes = require('./Router.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.originalUrl}`);
    next();
})

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})