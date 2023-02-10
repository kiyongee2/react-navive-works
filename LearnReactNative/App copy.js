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
import Greeting from './components/Greeting';

const App = () => {
  const [visible, setVisible] = useState(true);
  
  const onPress = () => {
    setVisible(!visible)
  } 

  return (
    <SafeAreaView>
      <View>
        <Button title='토글' onPress={onPress} />
        {visible ? <Box rounded={true} size='large' color='blue' /> : null}
      </View>
    </SafeAreaView>
  );
};


export default App;
