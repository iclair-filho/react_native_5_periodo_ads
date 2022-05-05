import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { useState } from 'react/cjs/react.development';

export default function FormMedia(){
   
    function Cadastrar() {
      
      

    }

    return(
        <View style={styles.conteudo}>
          <Text style={styles.title}>Cadastro</Text>
          <TextInput
            style={styles.input}
            // value={endereco}
            // onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Endereço de Imóvel"
            
            
          />
          <TextInput
            style={styles.input}
            // value={bairro}
            // onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Bairro"
            
          />
          <TextInput
            style={styles.input}
            // value={bairro}
            // onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Bairro"
            
          />
          <TextInput
            style={styles.input}
            // value={bairro}
            // onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Bairro"
            
          />
          <TextInput
            style={styles.input}
            // value={bairro}
            // onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Bairro"
            
          />
          <TextInput
            style={styles.input}
            // value={bairro}
            // onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Bairro"
            
          />
          <TextInput
            style={styles.input}
            // value={bairro}
            // onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Bairro"
            
          />
          <TextInput
            style={styles.input}
            // value={bairro}
            // onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Bairro"
            
          />
          <TextInput
            style={styles.input}
            // value={bairro}
            // onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Bairro"
            
          />
          <TextInput
            style={styles.input}
            // value={bairro}
            // onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Bairro"
            
          />
          <Button
            style={styles.btn}
            onPress={Cadastrar}
            title="Cadastrar"
            
          />
          
          

          
      </View>

    )
}

const styles=StyleSheet.create({
    conteudo:{
        flex: 1,
        backgroundColor:'white',
        padding:20
      },
      input:{
        backgroundColor:'#EEEDE9',
        borderRadius:10,
        height:60,
        marginBottom:10,
        color: 'black',
        fontSize:20,
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