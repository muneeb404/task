let inputText = document.getElementById('input-field');
let btn = document.getElementById('add-task-btn');
let taskContainer = document.getElementById('task-container');

btn.addEventListener('click', function() {
    let taskText = inputText.value;
    if (taskText === '') {
        alert('Please enter a task.');
    } else {
        let newTask = document.createElement('li');

        let taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');
        newTask.appendChild(taskSpan);
        
        let check = document.createElement('span');
        check.textContent = 'Check';
        check.classList.add('check-btn');
        newTask.appendChild(check);
    
        let remove = document.createElement('span');
        remove.textContent = 'Remove';
        remove.classList.add('remove-btn');
        newTask.appendChild(remove);
        
        taskContainer.appendChild(newTask);
        inputText.value = '';
        setData();
    }
});

taskContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('check-btn')) {
        event.target.parentElement.classList.toggle('completed');

    } else if (event.target.classList.contains('remove-btn')) {
        event.target.parentElement.remove();
    }
    setData();
});

const setData = () => {
    localStorage.setItem("data", taskContainer.innerHTML);
}

const getData = () => {
    taskContainer.innerHTML = localStorage.getItem("data");
}

getData();
