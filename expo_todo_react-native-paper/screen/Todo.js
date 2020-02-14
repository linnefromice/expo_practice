import React, { useState } from 'react'
import { View } from 'react-native'
import { List, Button } from 'react-native-paper'

let masterTodoList = [
  { id: 1, content: "test content 1", isDone: false },
  { id: 2, content: "test content 2", isDone: true },
  { id: 3, content: "test content 3", isDone: false }
]

const TodoListItem = (todo, todoList, setTodoList) => {
  const title = todo.id + " : " + todo.content + " / " + todo.isDone;
  
  function deleteTodo(id) {
    const tmpList = todoList.slice();
    for (let i = 0; i < tmpList.length; i++) {
      if (id == tmpList[i].id) {
        tmpList.splice(i, 1);
        break;
      }
    }
    setTodoList(tmpList);
  }

  function changeCompleteStatus(id) {
    const tmpList = todoList.slice();
    for (let i = 0; i < tmpList.length; i++) {
      if (id == tmpList[i].id) {
        tmpList[i].isDone = true;
        break;
      }
    }
    setTodoList(tmpList);
  }

  return (
    <List.Item
      title={title}
      left={() => (
        <Button
          onPress={() => changeCompleteStatus(todo.id)}
        >
          DONE
        </Button>
      )}
      right={() => (
        <Button
          onPress={() => deleteTodo(todo.id)}
        >
          DELETE
        </Button>
      )}
    />
  );
}

const TodoList = (todoList, setTodoList) => {

  return (
    <List.Section>
      <List.Subheader>TODO LIST</List.Subheader>
      {todoList.map((todo) => TodoListItem(todo, todoList, setTodoList))}
    </List.Section>
  );
}

const Todo = () => {
  const [todoList, setTodoList] = useState(masterTodoList.slice());

  return (
    <View>
      {TodoList(todoList, setTodoList)}
    </View>
  );
}

export default Todo;
