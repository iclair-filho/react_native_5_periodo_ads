import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'react-native-web';

import {NavigationContainer} from '@react-navigation/native';
import HeaderPrincipal from './src/componetes/header/HeaderPrincipal';
import Router from './src/router';


export default function App() {
  return (
    <View style={styles.container}>
      <HeaderPrincipal></HeaderPrincipal>
      <NavigationContainer>
        <Router></Router>
      </NavigationContainer>
      <StatusBar></StatusBar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
    },
  footer:{
    backgroundColor:'#EE0000'
  }
  

});


