const express = require('express');
const path = require('path');
routes= express.Router();
let tasks = [];

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../View/Public/Home.html'));
})

routes.get('/tasks', (req, res) => {
    res.json(tasks);
})

routes.post('/tasks', (req, res) => {
    const newTask = req.body.task;
    if(newTask){
       tasks.push(newTask);
       res.status(201).json(newTask);
    } else {
        res.status(404).json({message: 'Task Not Found'});
    }
})

module.exports= routes;


