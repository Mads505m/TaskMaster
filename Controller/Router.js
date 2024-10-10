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
    }
    return res.status(400).json({ message: 'Task cannot be updated' });
});

routes.put('/tasks',(req, res) => {
    const { oldTask, newTask } = req.body;
    const taskIndex = tasks.indexOf(oldTask);
    if (taskIndex !== -1 && oldTask !== newTask) {
        tasks.splice(taskIndex, 1, newTask);
        return res.status(204).send();
    } else if(oldTask === newTask) {
        console.error('Cannot update with same description');
    } else{
        console.error('Unexpected error occurred')
    }
    return res.status(404).json({ message: 'Task not found' });
})

routes.delete('/tasks', (req, res) => {
    const taskToDelete = req.body.task;
    const taskIndex = tasks.indexOf(taskToDelete);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        return res.status(204).send();
    } else{
        console.error('Unexpected error occurred')
    }
    return res.status(404).json({ message: 'Task not found' });
});

module.exports = routes;
