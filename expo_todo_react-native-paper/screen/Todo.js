import React from 'react'
import { View } from 'react-native'
import { List } from 'react-native-paper'

let masterTodoList = [
  { id: 1, content: "test content 1", isDone: false },
  { id: 2, content: "test content 2", isDone: true },
  { id: 3, content: "test content 3", isDone: false }
]

const Todo = () => {
  return (
    <View>
      <List.Section>
        <List.Subheader>TODO LIST</List.Subheader>
        <List.Item
          title={masterTodoList[0].content}
        />
        <List.Item
          title={masterTodoList[1].content}
          />
        <List.Item
          title={masterTodoList[2].content}
          />
      </List.Section>
    </View>
  );
}

export default Todo;
