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

  removeTodo = id => {
    for (let i = 0; i < this.todoList.length; i++) {
      if (id == this.todoList[i].id) {
        this.todoList.splice(i, 1);
        break;
      }
    }
  }

  updateCompleteTodo = id => {
    for (let i = 0; i < this.todoList.length; i++) {
      if (id == this.todoList[i].id) {
        this.todoList[i].isDone = true;
        break;
      }
    }
  }
  
}

decorate(TodoStore, {
  todoList: observable,
  getTodoList: computed,
  addNewTodo: action,
  removeTodo: action,
  updateCompleteTodo: action,
});

let store = new TodoStore();

export default store;

autorun (() => {
  console.log(store.todoList);
});