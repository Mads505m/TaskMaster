const express = require('express');
const path = require('path');
const routes = require('./Router.js');
const app = express();
require('dotenv').config({ path: '../View/EnvFile/.env' });
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method} Requests URL '${req.originalUrl}'`);
    next();
})

app.use(express.static(path.join(__dirname,'..','View','Public')));
app.use('/', routes);

app.use((req, res, next) => {
    const err = new Error('This URL does not exist');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.error(err.stack);

    if (err.status === 404) {
        res.status(404).send('This URL does not exist');
    } else {
        res.status(500).send('something broke');
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})