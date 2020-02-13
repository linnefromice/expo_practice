import React from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Text, List, ListItem, Button } from 'native-base';

let masterTodoList = [
  { id: 1, content: "test content 1", isDone: false },
  { id: 2, content: "test content 2", isDone: true },
  { id: 3, content: "test content 3", isDone: false }
]

const TodoListItem = (data) => {
  return (
    <ListItem>
      <Left>
        <Button info>
          <Text>DONE</Text>
        </Button>
      </Left>
      <Body>
        <Text>{data.id}</Text>
        <Text>{data.content}</Text>
      </Body>
      <Right>
        <Button dark>
          <Text>REMOVE</Text>
        </Button>
      </Right>
    </ListItem>
  );
}

const TodoList = (list) => {
  return (
    <List>
      {list.map(TodoListItem)}
    </List>
  )
}

const Todo = () => {
  return (
    <Container>
       <Header>
        <Left />
        <Body>
          <Title>TODO APP Header</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        {TodoList(masterTodoList)}
      </Content>
    </Container>
  );
}

export default Todo;