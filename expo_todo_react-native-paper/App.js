import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Todo from './screen/Todo';

export default function App() {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content
          title="Todo App"
          subtitle="using expo / react-native-paper"
        />
      </Appbar.Header>
      <Todo/>
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
