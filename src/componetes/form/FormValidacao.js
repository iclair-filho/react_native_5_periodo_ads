import { StyleSheet, View, Text } from 'react-native';

import NumberValida from './Calculo/NumberValida';

export default function FormValidacao(){
    
    return(
        <View style={styles.conteudo}>
          <Text style={styles.title}>Validação de Valores</Text>
          <NumberValida></NumberValida>
          <NumberValida></NumberValida>
          <NumberValida></NumberValida>
          
         
          
      </View>
    )
}

const styles=StyleSheet.create({
    conteudo:{
        flex: 1,
        backgroundColor:'white',
        padding:20
      },
      title:{
        fontSize: 20,
        textAlign:'center',
        marginBottom:5,
        padding: 10,
        borderRadius:10,
        backgroundColor: '#F7C21C'
        
      }
})