import React from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Text, List, ListItem, Button } from 'native-base';

let masterTodoList = [
  { id: 1, content: "test content 1", isDone: false },
  { id: 2, content: "test content 2", isDone: true },
  { id: 3, content: "test content 3", isDone: false }
]


const TodoListItem = (data) => {
  // TODO: use state
  function removeTodo(id) {
    console.log(id); // TODO: delete debug code
    for (let i = 0; i < masterTodoList.length; i++) {
      if (id == masterTodoList[i].id) {
        masterTodoList.splice(i, 1);
        console.log(masterTodoList);
        break;
      }
    }
  }

  function updateComplete(id) {
    console.log(id); // TODO: delete debug code
    for (let i = 0; i < masterTodoList.length; i++) {
      if (id == masterTodoList[i].id) {
        masterTodoList[i].isComplete = true;
        console.log(masterTodoList); // TODO: delete debug code
        break;
      }
    }
  }

  return (
    <ListItem>
      <Left>
        <Button info
          onPress={() => updateComplete(data.id)}        
        >
          <Text>DONE</Text>
        </Button>
      </Left>
      <Body>
        <Text>{data.id}</Text>
        <Text>{data.content}</Text>
      </Body>
      <Right>
        <Button dark
          onPress={() => removeTodo(data.id)}
        >
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