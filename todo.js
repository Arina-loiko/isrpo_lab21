const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCounter = document.getElementById('taskCounter');

let taskCount = 0;

function updateCounter() {
    taskCounter.textContent = 'Всего задач: ' + taskCount;
}

function createTaskItem(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const buttons = document.createElement('div');
    const completeBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    li.className = 'task-item';
    span.className = 'task-text';
    buttons.className = 'task-buttons';
    completeBtn.className = 'complete-btn';
    deleteBtn.className = 'delete-btn';

    span.textContent = text;
    completeBtn.textContent = 'Выполнено';
    deleteBtn.textContent = 'Удалить';

    buttons.appendChild(completeBtn);
    buttons.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(buttons);

    completeBtn.addEventListener('click', function() {
        span.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
        taskCount--;
        updateCounter();
    });

    return li;
}

function addNewTask() {
    const text = taskInput.value.trim();

    if (text === '') {
        return;
    }

    const item = createTaskItem(text);
    taskList.appendChild(item);

    taskCount++;
    updateCounter();

    taskInput.value = '';
    taskInput.focus();
}

addBtn.addEventListener('click', addNewTask);

taskInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addNewTask();
    }
});

const initialTasks = ['Изучить работу с DOM', 'Обработка событий в JavaScript', 'Сделать лабораторную работу'];
initialTasks.forEach(function(text) {
    const item = createTaskItem(text);
    taskList.appendChild(item);
    taskCount++;
});
updateCounter();
