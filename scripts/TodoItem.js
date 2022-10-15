import { TodoList } from './TodoList.js';

export class TodoItem {
  constructor(todoText, isDone = false) {
    this._id = null;
    this._todoText = todoText;
    this._isDone = isDone;
  }
  set id(id) {
    this._id = id;
  }

  save(array) {
    array.push(this);
    console.log(`${this._todoText} <- successfully added to the Array!`);
  }
}
