import React from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Text, List, ListItem, Button, Form, Item, Input } from 'native-base';
import { observer } from 'mobx-react';

import store from '../store/todoStore';

const TodoMobX = observer(() => {
  function addNewTodo() {
    store.incrementRecentId();
    const tmpTodo = {
      id: store.recentId,
      content: "ADD TODO using MobX : No." + store.recentId.toString(),
      isDone: false
    }
    store.addNewTodo(tmpTodo);
  }

  function removeTodo(id) {
    store.removeTodo(id);
  }

  function updateCompleteTodo(id) {
    store.updateCompleteTodo(id);
  }


  const TodoListItem = (data) => {
    const LeftButton = () => {
      return (
        <Left>
          <Button info
            onPress={() => updateCompleteTodo(data.id)}
          >
            <Text>DONE</Text>
          </Button>
        </Left>
      );
    }

    const BodyContent = () => {
      return (
        <Body>
          <Text>{data.id}</Text>
          <Text>{data.content}</Text>
        </Body>
      );
    }

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
      return (
        <ListItem>
          <Left/>
          <BodyContent/>
          <RightButton/>
        </ListItem>
      );
    } else {
      return (
        <ListItem>
          <LeftButton/>
          <BodyContent/>
          <RightButton/>
        </ListItem>
      );
    }
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