export class TodoItem {
  constructor(todoText, isDone = false) {
    this._todoText = todoText;
    this._isDone = isDone;
  }

  save(array) {
    array.push(this);
    console.log(`${this._todoText} wurde zum Array hinzugefügt`);
  }
}
