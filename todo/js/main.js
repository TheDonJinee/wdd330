import Todos from './Todos.js';

const todo = new Todos('tasks');

window.addEventListener('load', () => {
    todo.displayTodoList();
    todo.listenToTabs();
    const nTask= document.getElementById('add');
    nTask.addEventListener('click', () =>  todo.updateTodoList() );
    window.addEventListener('keyup', function(e){
        if (e.key === 'Enter') {
            todo.updateTodoList();
        }
    })
});
