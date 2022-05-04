import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { useState } from 'react/cjs/react.development';

export default function FormMedia(){
    const [nota1, setnota1] = useState(null);
    const [nota2, setnota2] = useState(null);
    const [nota3, setnota3] = useState(null);

    

    function CalculoMedia() {
      const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) )/3 

      if (media<4) {

        alert('Sua média foi: ' + media.toFixed(2) + '. Você está REPROVADOR!');
      } else if (media>4 && media<7) {
        alert('Sua média foi: ' + media.toFixed(2) + '. Você está EM RECUPERAÇÃO!');
      }else if(media>7) {
        alert('Sua média foi: ' + media.toFixed(2) + '. Você está APROVADO!');
      }
      

    }

    return(
        <View style={styles.conteudo}>
          <Text style={styles.title}>Cadastro de Imóveis</Text>
          <TextInput
            style={styles.input}
            value={endereco}
            // onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Endereço do Imóveel"
            // keyboardType=''
          />
          <Button
            style={styles.btn}
            onPress={CalculoMedia}
            title="Calcular Média"
            
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