import React from "react";
import {StyleSheet, View} from 'react-native'
import Table from "../../componetes/table";

export default function ValidaValor(){
    return(
        <View style={styles.container}>
            <Table/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff'
      }
    
  
  });