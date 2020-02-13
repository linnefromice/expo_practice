import React from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Text, List, ListItem, Button, Form, Item, Input } from 'native-base';
import { observer } from 'mobx-react';

import store from '../store/todoStore';

const TodoMobX = observer(() => {

  const TodoListItem = (data) => {
    return (
      <ListItem>
        <Body>
          <Text>{data.id}</Text>
          <Text>{data.content}</Text>
        </Body>
      </ListItem>
    );
  }

  function addNewTodo() {
    const nextId = store.todoList.length + 1;
    const tmpTodo = {
      id: nextId,
      content: "ADD TODO using MobX : No." + nextId.toString(),
      isDone: false
    }
    store.addNewTodo(tmpTodo);
  }

  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>TODO APP Header - Mobx</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Button info
          onPress={() => addNewTodo()}
        >
          <Text>SUBMIT</Text>
        </Button>        
        <List>
          {store.todoList.map((data) => TodoListItem(data))}
        </List>
      </Content>
    </Container>
  );
});

export default TodoMobX;