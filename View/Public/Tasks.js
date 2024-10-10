document.addEventListener('DOMContentLoaded', fetchTasks);

let currentTask;

function fetchTasks() {
    fetch('/tasks')
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('task-list');
            taskList.innerHTML = '';
            tasks.forEach(task => {
                const li = document.createElement('li');

                const updateButton = document.createElement('button');
                updateButton.id = 'update';
                updateButton.textContent = 'Opdater Opgaven';
                updateButton.addEventListener('click', () => {
                    openModal(task);
                });

                const completeButton = document.createElement('button');
                completeButton.id = 'complete';
                completeButton.textContent = 'Færdig';
                completeButton.addEventListener('click', () => {
                    li.style.textDecoration = 'line-through';
                });

                const deleteButton = document.createElement('button');
                deleteButton.id = 'delete';
                deleteButton.textContent = 'Slet';
                deleteButton.addEventListener('click', () => {
                    deleteTask(task)
                });

                li.textContent = task;
                li.appendChild(updateButton);
                li.appendChild(completeButton);
                li.appendChild(deleteButton);
                taskList.appendChild(li);
            });
        });
}

document.getElementById('taskForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const task = document.getElementById('task').value;
    if(task) {
        addTask(task);
        document.getElementById('task').value = '';
    }
});

function addTask(task) {
    if (!task) {
        console.error('Task string is empty');
        alert('Task cannot be empty');
    }
    fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task }),
    })
        .then(() => {
            task.value = '';
            fetchTasks();
        })
        .catch(error => {
            console.error('Error adding task:', error);
        });
}

function deleteTask(task) {
    fetch('/tasks', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task }),
    })
        .then(() => {
            fetchTasks();
        })
        .catch(error => {
            console.error('Error deleting task:', error);
        });
}

function openModal(task) {
    const modal = document.getElementById('modal');
    const updateInput = document.getElementById('update-task');

    currentTask = task;
    updateInput.value = task;
    modal.style.display = 'block';
}

function closeModal(){
    const modal = document.getElementById('modal');
    currentTask = null;
    modal.style.display = 'none';
}

document.getElementById('submit-update').addEventListener('click', () => {
    const updatedTask = document.getElementById('update-task').value;
    if (updatedTask !== currentTask) {
        updateTask(currentTask, updatedTask);
        closeModal();
    }
});

function updateTask(oldTask, newTask) {
    fetch('/tasks', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldTask, newTask }),
    })
        .then(() => {
            fetchTasks();
        })
        .catch(error => {
            console.error('Error updating task:', error);
        })
}

document.getElementById('close').addEventListener('click', closeModal);