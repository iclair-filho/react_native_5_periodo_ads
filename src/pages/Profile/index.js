import React from "react";
import {StyleSheet, View, Text} from 'react-native'

export default function Profile(){
    return(
        <View style={styles.container}>
            <Text>Página Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff'
      }
    
  
  });