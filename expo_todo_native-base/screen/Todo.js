import React from 'react';
import { Container, Header, Left, Body, Title, Right, Content, Text } from 'native-base';

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
        <Text>TODO APP Content</Text>
      </Content>
    </Container>
  );
}

export default Todo;