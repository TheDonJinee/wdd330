const task = document.querySelector('#task');
const taskList = document.querySelector('#taskList');
const addTask = document.querySelector('#addTask');
const taskArray = []

function addTheTask() {
    const taskValue = task.value;
    let individualTask = document.createElement('li');
    let newInput = document.createElement('input');
    let delBtn = document.createElement('button');
    let para = document.createElement('p');
    newInput.setAttribute('type', 'checkbox');
    individualTask.setAttribute('class', 'join');
    delBtn.setAttribute('class', 'delete');
    delBtn.innerHTML = '❌';
    delBtn.addEventListener('click', () => {
        taskList.removeChild(individualTask);
    });
    taskList.append(individualTask);
    individualTask.appendChild(newInput);
    individualTask.appendChild(para);
    para.append(taskValue);
    individualTask.appendChild(delBtn);
    if (taskValue === '') {
        document.querySelector('#notEmpty').innerHTML = 'Task cannot be left empty. Enter Valid Task!';
        return;
    }
    taskArray.push(taskValue)
    document.querySelector('#left').innerHTML = taskArray.length;
    task.value = '';
    task.focus();
}

// const completed = taskList.foreach(complete => (
//     if (newInput.checked === true) {
//         individualTask.style.display = 'block';
//     } else {
//         individualTask.style.display = 'none';
//     }
// )
       

// task.addEventListener('input', checkEmptyEntry)
addTask.addEventListener('click', addTheTask)
document.addEventListener('keyup', function(e){
    if (e.key === 'Enter') {
        addTheTask()
    }
})
document.querySelector('#active').addEventListener('click', completed);