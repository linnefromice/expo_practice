import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function App() {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content
          title="Todo App"
          subtitle="using expo / react-native-paper"
        />
      </Appbar.Header>
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
