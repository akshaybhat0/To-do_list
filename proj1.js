const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task event
taskForm.addEventListener('submit', addTask);

// Delete task event
taskList.addEventListener('click', removeTask);

// Add task
function addTask(e) {
  e.preventDefault();

  // Create task element
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(taskInput.value));

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.color = 'red';
  li.appendChild(deleteBtn);

  // Append to task list
  taskList.appendChild(li);

  // Save task to localStorage
  saveTask(taskInput.value);

  // Clear input
  taskInput.value = '';
}

// Remove task
function removeTask(e) {
  if (e.target.textContent === 'Delete') {
    if (confirm('Are you sure?')) {
      const task = e.target.parentElement;
      task.remove();

      // Remove from localStorage
      removeTaskFromLocalStorage(task.firstChild.textContent);
    }
  }
}

// Save task to localStorage
function saveTask(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
// Load tasks from localStorage
function loadTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    // Create task element
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(task));

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.color = 'red';
    li.appendChild(deleteBtn);

    // Append to task list
    taskList.appendChild(li);
  });
}

// Remove task from localStorage
function removeTaskFromLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

