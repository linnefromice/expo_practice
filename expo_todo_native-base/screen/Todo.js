import React, { useState } from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Text, List, ListItem, Button, Form, Item, Input } from 'native-base';

let masterTodoList = [
  { id: 1, content: "test content 1", isDone: false },
  { id: 2, content: "test content 2", isDone: true },
  { id: 3, content: "test content 3", isDone: false }
]

// TODOリストの1行を構築
const TodoListItem = (data, todoList, setTodoList) => {
  // TODOの削除
  function removeTodo(id) {
    const tmpList = todoList.slice();
    for (let i = 0; i < tmpList.length; i++) {
      if (id == tmpList[i].id) {
        tmpList.splice(i, 1);
        break;
      }
    }
    setTodoList(tmpList);
  }

  // TODOを完了ステータスに変更
  function updateComplete(id) {
    const tmpList = todoList.slice();
    for (let i = 0; i < tmpList.length; i++) {
      if (id == tmpList[i].id) {
        tmpList[i].isDone = true;
        break;
      }
    }
    setTodoList(tmpList);
  }

  // 完了更新ボタン
  const LeftButton = () => {
    return (
      <Left>
        <Button info
          onPress={() => updateComplete(data.id)}        
        >
          <Text>DONE</Text>
        </Button>
      </Left>
    );
  }

  // コンテンツ表示部
  const BodyContent = () => {
    return (
      <Body>
        <Text>{data.id}</Text>
        <Text>{data.content}</Text>
      </Body>
    );
  }

  // 削除ボタン
  const RightButton = () => {
    return (
      <Right>
        <Button dark
          onPress={() => removeTodo(data.id)}
        >
          <Text>REMOVE</Text>
        </Button>
      </Right>
    );
  }

  if (data.isDone) {
    // 完了ステータスのTODOは完了更新ボタンを表示しない
    return (
      <ListItem>
        <Left />
        <BodyContent />
        <RightButton />
      </ListItem>
    );  
  } else {
    return (
      <ListItem>
        <LeftButton />
        <BodyContent />
        <RightButton />
      </ListItem>
    );  
  }
}

// TODOリスト構築
const TodoList = (todoList, setTodoList) => {
  return (
    <List>
      {todoList.map((data) => TodoListItem(data, todoList, setTodoList))}
    </List>
  )
}

// Header構築
const HeaderPart = () => {
  return (
    <Header>
      <Left />
      <Body>
        <Title>TODO APP Header</Title>
      </Body>
      <Right />
    </Header>
  );
}

const NewTodoForm = (todoList, setTodoList) => {
  const [text, setText] = useState("")
  const [recentId, setRecentId] = useState(masterTodoList.length)

  function addNewTodo() {
    const tmpList = todoList.slice();
    const newId = recentId + 1;
    tmpList.push({
      id: newId,
      content: text,
      isDone: false,
    });
    setTodoList(tmpList);
    setRecentId(newId);
  }

  return (
    <Form>
      <Item>
        <Input
          placeholder="NEW TODO CONTENT"
          onChangeText={setText}
          value={text}
        />
      </Item>
      <Item>
        <Button
          onPress={() => addNewTodo()}
        >
          <Text>SUBMIT</Text>
        </Button>
      </Item>
    </Form>
  );
}

// TODOリスト全体
const Todo = () => {
  const [todoList, setTodoList] = useState(masterTodoList.slice())

  return (
    <Container>
      <HeaderPart/>
      <Content>
        {NewTodoForm(todoList, setTodoList)}
        {TodoList(todoList, setTodoList)}
      </Content>
    </Container>
  );
}

export default Todo;