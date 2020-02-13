import React from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Text, List, ListItem } from 'native-base';

let masterTodoList = [
  { id: 1, content: "test content 1", isDone: false },
  { id: 2, content: "test content 2", isDone: true },
  { id: 3, content: "test content 3", isDone: false }
]

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
        <List>
          <ListItem>
            <Text>{masterTodoList[0].content}</Text>
          </ListItem>
          <ListItem>
            <Text>{masterTodoList[1].content}</Text>
          </ListItem>
          <ListItem>
            <Text>{masterTodoList[2].content}</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}

export default Todo;