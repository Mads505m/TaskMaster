const express = require('express');
const path = require('path');
const routes = express.Router();
let tasks = [];


routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../View/Public/Home.html'));
});


routes.get('/tasks', (req, res) => {
    res.json(tasks);
});


routes.post('/tasks', (req, res) => {
    const newTask = req.body.task;
    if (newTask && newTask.trim() !== '') {
        tasks.push(newTask);
        res.status(201).json(newTask);
    } else {
        console.error('Received empty task');
        res.status(400).json({ message: 'Task cannot be empty' });
    }
});

module.exports = routes;
