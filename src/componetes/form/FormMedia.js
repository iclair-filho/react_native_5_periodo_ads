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
          <Text style={styles.title}>Cáculo de Média</Text>
          <TextInput
            style={styles.input}
            value={nota1}
            onChangeText={(nota1)=>setnota1(nota1) }
            placeholder="Digite sua 1ª nota"
            keyboardType='numeric'
          />
          <TextInput
            style={styles.input}
            value={nota2}
            onChangeText={(nota2)=>setnota2(nota2) }
            placeholder="Digite sua 2ª nota"
            keyboardType='numeric'
          />
          <TextInput
            style={styles.input}
            value={nota3}
            onChangeText={(nota3)=>setnota3(nota3) }
            placeholder="Digite sua 3ª nota"
            keyboardType='numeric'
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