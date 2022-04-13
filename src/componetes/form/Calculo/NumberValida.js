import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

import { useState } from 'react/cjs/react.development';

export default function NumberValida(){
    const [number, setnumber] = useState(null);
    const [resultado, setresultado] = useState(null);
    

    function ValorNumero() {
        
        if (number>0 && number<=10) {
          
          setresultado('Este número está entre 0 e 10')
         
           
        } else if (number>10 && number<=30) {
          setresultado('Este número está entre 10 e 30')
          
        }else if (number>30) {
          setresultado('Este número é maior que 30')
          
        }
        
  
      }

    return(
        <View >
          <Text style={styles.tx}>{resultado}</Text>
            <View style={styles.row}>
              <TextInput
              style={styles.input}
              value={number}
              onChangeText={(number) => setnumber(number)}
              placeholder="Digite um Numero"
              keyboardType='numeric' />
            <Button
              style={styles.btn}
              onPress={ValorNumero}
              title="Verificar" />

            </View>
          
          

      </View>


    )
}

const styles=StyleSheet.create({
    conteudo:{
        flex: 1,
        backgroundColor:'white',
        padding:20
      },
      row:{
        flexDirection: 'row',
        justifyContent:'space-around',
        marginBottom:0
        
      },
      input:{
        backgroundColor:'#EEEDE9',
        borderRadius:10,
        width: '75%',
        height:50,
        marginBottom:5,
        color: 'black',
        fontSize:20,
        padding:10
      },
      btn:{
        flex:1,
        
        
      },
      tx:{
        fontSize:20,
        fontWeight:'700',
        color:'green',
        marginTop:0,
        
      }
})