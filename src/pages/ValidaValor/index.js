import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import FormValidacao from "../../componetes/form/FormValidacao";

export default function ValidaValor(){
    return(
        <View style={styles.container}>
            <FormValidacao></FormValidacao>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff'
      }
    
  
  });