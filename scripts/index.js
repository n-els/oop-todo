import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';

//Get DOM Elements

const todoContainer = document.querySelector('#todo-container');
const todoInput = document.querySelector('#todo-input');

// Create an Instance of TodoList
const todoList = new TodoList();

// Event Listener for Inputfield

todoInput.addEventListener('change', event => {
  const todoName = event.target.value;
  const todo = new TodoItem(todoName);
  todo.save(todoList.list);
  todoContainer.innerHTML = '';
  todoInput.value = '';
  todoList.renderList(todoContainer);
});
