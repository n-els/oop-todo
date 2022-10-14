const todoContainer = document.querySelector('#todo-container');
const todoInput = document.querySelector('#todo-input');
const todoList = [];

// TodoItem Klasse:
class TodoItem {
  constructor(todoText, isDone = false) {
    this._todoText = todoText;
    this._isDone = isDone;
  }
}

todoInput.addEventListener('change', event => {
  const todoName = event.target.value;
  const todo = new TodoItem(todoName);
  todoList.push(todo);
  todoContainer.innerHTML = '';
  todoInput.value = '';
  renderList(todoList);
});

// const todo1 = new TodoItem('text');
// const todo2 = new TodoItem('text 2', false);
// const todo3 = new TodoItem('text3', true);

// todoList.push(todo1);
// todoList.push(todo2);
// todoList.push(todo3);

const renderList = list => {
  list.forEach(element => {
    const p = document.createElement('p');
    p.innerText = element._todoText;
    todoContainer.appendChild(p);
  });
};
