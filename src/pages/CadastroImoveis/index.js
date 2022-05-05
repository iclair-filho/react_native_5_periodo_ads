import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import FormMedia from "../../componetes/form/FormMedia";


export default function CadastroImoveis(){
    return(
        <View style={styles.container}>
            <FormMedia></FormMedia>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff'
      }
    
  
  });