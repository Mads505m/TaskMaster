document.addEventListener('DOMContentLoaded', fetchTasks);

function fetchTasks() {
    fetch('/tasks')
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task;
                taskList.appendChild(li);
            });
        });
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (!task) {
        console.error('Task string is empty');
        alert('Task cannot be empty');
        return;
    }
    fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task }),
    })
        .then(() => {
            taskInput.value = '';
            fetchTasks();
        })
        .catch(error => {
            console.error('Error adding task:', error);
        });

}
