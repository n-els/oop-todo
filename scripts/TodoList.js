export class TodoList {
  constructor() {
    this._list = [];
  }
  get list() {
    return this._list;
  }
  renderList(parentContainer) {
    this._list.forEach(element => {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'X';
      li.innerText = element._todoText;
      li.appendChild(deleteButton);
      parentContainer.appendChild(li);
    });
  }
}
