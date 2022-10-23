import * as stored from './ls.js';

let todoList = [];
export default class Todos {
    constructor(id) {
        this.element = document.getElementById(id);
        this.key = id;                                
        this.error = document.getElementById("error");
        todoList = getToDo(this.key);  
    }

    displayTodoList(){
        renderToDoList(this.element, todoList);
        this.listenToEvents();
    }

    updateTodoList(){
        this.error.innerHTML = "";
        const task = document.querySelector('#getTask');
        if ( task.value === "") {
            this.error.innerHTML = "Invalid Task! Enter Valid Task!";
            return;
        }
        saveTodo(task.value, this.key);
        task.value = '';
        task.focus();
        this.displayTodoList();
    }

    completeToDo(itId) {
        let task = todoList.findIndex(task => task.id === +itId);
        todoList[task].completed = !todoList[task].completed;
        stored.writeToLS(this.key, todoList);
        document.getElementById(itId).classList.toggle('completed');
    }

    removeItem(itID) {
        let task = todoList.findIndex(task => task.id === +itID);
        todoList.splice(task, 1);
        stored.writeToLS(this.key, todoList);
        this.displayTodoList(); 
    }

    listenToEvents() {
        const ls = Array.from(this.element.children);
        ls.forEach(item => {
            item.children[0].addEventListener('click', () =>  this.completeToDo(item.id) );
            item.children[2].addEventListener('click', () =>  this.removeItem(item.id)   );
        })
    }

    listenToTabs() {
        const actionButtons = Array.from(document.querySelectorAll('.tab'));
        actionButtons.forEach(tab => {
            tab.addEventListener('click', event => this.filterItems(event));
        });
    }

    filterItems(event) {
        const actionButtons = Array.from(document.querySelectorAll('.tab'));
        for (let btn of actionButtons) {
            btn.classList.remove('selected-tab'); 
        }
        
        event.currentTarget.classList.add('selected-tab');
        this.filterToDos(event.currentTarget.id);
    }

    filterToDos(category){
        category = filterBy(category);
        const f = todoList.filter(task =>  (category != null) ? task.completed === category : task );
        renderToDoList(this.element, f);
        this.listenToEvents();
    }

}

function filterBy(category){
    switch(category){
        case 'active':      return  false;      
        case 'complete':    return  true;       
        case 'all':         return  null;       
        default :           return  null;       
    }                                          
}

function getToDo(key) {
    let retrieved = stored.retrieveSavedData(key);
    return retrieved === null ? [] : retrieved; 
}

function saveTodo(value, key) {
    let timestamp = Date.now();
    const newTodo = {id: timestamp, content: value, completed: false};
    todoList.push(newTodo);
    stored.writeToLS(key,todoList);
}

function renderToDoList(ul, ls) {
    ul.innerHTML = '';
    ls.forEach(taskObject => ul.innerHTML += renderOneToDo(taskObject) );
    updateCount(ls);
}

function renderOneToDo(task) {
   
    return `<li id="${task.id}" ${task.completed ? 'class="completed"' : ''}>
        <input name="${task.content}" type="checkbox" value="none" ${task.completed ? 'checked' : ''}>
        <p>${task.content}</p>
        <button class="delete">❌</button>
    </li>`;
}

function updateCount(count){
    document.getElementById('num-task').innerHTML = `${(count != null) ? count.length : 0}  tasks left!`;
}
