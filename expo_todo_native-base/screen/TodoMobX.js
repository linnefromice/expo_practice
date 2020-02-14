import React, { useState } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, Text, List, ListItem, Button } from 'native-base';
import { observer } from 'mobx-react';

import store from '../store/todoStore';
import { TextInput } from 'react-native';

const TodoMobX = observer(() => {
  const [inputText, setInputText] = useState('');

  function addNewTodo() {
    store.incrementRecentId();
    const tmpTodo = {
      id: store.recentId,
      content: inputText,
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

  const AddNewTodoArea = () => {
    return (
      <View>
        <TextInput
          label="TODO Title"
          placeholder="Please input todo title."
          value={inputText}
          onChangeText={text => setInputText(text)}
        />
        <Button info
          onPress={() => addNewTodo()}
        >
          <Text>SUBMIT</Text>
        </Button>
      </View>
    )
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
        {AddNewTodoArea()}
        <List>
          {store.todoList.map((data) => TodoListItem(data))}
        </List>
      </Content>
    </Container>
  );
});

export default TodoMobX;
