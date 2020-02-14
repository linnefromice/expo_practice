import React from 'react'
import { View } from 'react-native'
import { List } from 'react-native-paper'

let masterTodoList = [
  { id: 1, content: "test content 1", isDone: false },
  { id: 2, content: "test content 2", isDone: true },
  { id: 3, content: "test content 3", isDone: false }
]

const TodoListItem = (todo) => {
  return (
    <List.Item
      title={todo.content}
    />
  );
}

const TodoList = (todoList) => {
  return (
    <List.Section>
      <List.Subheader>TODO LIST</List.Subheader>
      {todoList.map(TodoListItem)}
    </List.Section>
  );
}

const Todo = () => {
  return (
    <View>
      {TodoList(masterTodoList)}
    </View>
  );
}

export default Todo;
