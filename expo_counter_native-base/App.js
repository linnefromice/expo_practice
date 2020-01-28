import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Content, Header, Left, Body, Right, Title, Footer, FooterTab, Button, Icon } from 'native-base';

export default function App() {
  return (
    <Content padder>
      <AppHeader/>
      <CountContent/>
      <AppFooter/>
    </Content>
  );
}

const AppHeader = () => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>Expo Counter</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Right>
    </Header>
  );
}

const AppFooter = () => {
  return (
    <Footer>
      <FooterTab>
        <Body>
          <Title>@linnefromice</Title>
        </Body>
      </FooterTab>
    </Footer>
  );
}

function CountContent() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <View style={styles.msgArea}>
        <Text style={styles.textMsg}>You have pushed the button this many times:</Text>
      </View>
      <View style={styles.countDisplayArea}>
        <Text style={styles.textCount}>{count}</Text>
      </View>
      <View style={styles.buttonsArea}>
        <View style={styles.buttonArea}> 
          <Button
            block
            info
            large
            onPress={() => setCount(count+1)}
          >
            <Text style={styles.buttonText}>PLUS / +</Text>
          </Button>
        </View>
        <View style={styles.buttonArea}> 
          <Button
            block
            warning
            large
            onPress={() => setCount(count-1)}
          >
            <Text style={styles.buttonText}>MINUS / -</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  msgArea: {
    flex: 1,
    padding: '0.5rem',
    alignItems: 'center'
  },
  countDisplayArea: {
    flex: 1,
    padding: '0.5rem',
    alignItems: 'center'
  },
  buttonsArea: {
    flex: 1,
    padding: '0.5rem',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textCount: {
    fontSize: 50
  },
  textMsg: {
    fontSize: 20
  },
  buttonArea: {
    flex: 1,
    padding: '0.5rem',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});
