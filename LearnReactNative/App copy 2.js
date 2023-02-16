/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
//import type {Node} from 'react';
import {Button, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Box from './components/Box';
import Counter from './components/Counter';
import Greeting from './components/Greeting';

const App = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full:{
    flex: 1,
    backgroundColor: 'cyan'
  }
});

export default App;
