import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.msgArea}>
          <Text>You have pushed the button this many times:</Text>
        </View>
        <View style={styles.countDisplayArea}>
          <Text style={styles.textCount}>{count}</Text>
        </View>
        <View style={styles.buttonsArea}>
          <View style={styles.buttonArea}> 
            <Button
              title='PLUS / +'
              onPress={() => setCount(count+1)}
            />
          </View>
          <View style={styles.buttonArea}> 
            <Button
              title='MINUS / -'
              onPress={() => setCount(count-1)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    padding: '0.5rem'
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
    fontSize: 30
  },
  buttonArea: {
    flex: 1,
    padding: '0.5rem',
  }
});
