const todoContainer = document.querySelector('#todo-container');
const todoInput = document.querySelector('#todo-input');

// TodoList Klasse:
class TodoList {
  constructor() {
    this._list = [];
  }
  get list() {
    return this._list;
  }
  renderList() {
    this._list.forEach(element => {
      const p = document.createElement('p');
      p.innerText = element._todoText;
      todoContainer.appendChild(p);
    });
  }
}

// TodoItem Klasse:
class TodoItem {
  constructor(todoText, isDone = false) {
    this._todoText = todoText;
    this._isDone = isDone;
  }

  save(array) {
    array.push(this);
    console.log(`${this._todoText} wurde zum Array hinzugefügt`);
  }
}

// Create an Instance of TodoList
const todoList = new TodoList();

// Event Listener for Inputfield

todoInput.addEventListener('change', event => {
  const todoName = event.target.value;
  const todo = new TodoItem(todoName);
  todo.save(todoList.list);
  todoContainer.innerHTML = '';
  todoInput.value = '';
  todoList.renderList();
});
