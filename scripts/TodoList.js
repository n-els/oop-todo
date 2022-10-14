export class TodoList {
  constructor() {
    this._list = [];
  }
  get list() {
    return this._list;
  }
  renderList(parentContainer) {
    this._list.forEach(element => {
      const p = document.createElement('p');
      p.innerText = element._todoText;
      parentContainer.appendChild(p);
    });
  }
}
