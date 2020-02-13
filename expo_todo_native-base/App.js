import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'mobx-react';

import Todo from './screen/Todo';
import TodoMobX from './screen/TodoMobX';
import store from './store/todoStore';

export default function App() {
  return (
    <View>
      <Provider store={store}>
        <TodoMobX />
      </Provider>
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
