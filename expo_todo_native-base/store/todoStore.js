import { observable, computed, action, decorate, autorun } from 'mobx';

class TodoStore {
  todoList = [
    { id: 1, content: "test content 1 for MobX", isDone: false },
    { id: 2, content: "test content 2 for MobX", isDone: true },
    { id: 3, content: "test content 3 for MobX", isDone: false }
  ];

  get getTodoList(){ return todoList; }

  addNewTodo = todo => {
    this.todoList.push(todo);
  }
}

decorate(TodoStore, {
  todoList: observable,
  getTodoList: computed,
  addNewTodo: action,
});

let store = new TodoStore();

export default store;

autorun (() => {
  console.log(store.todoList);
});