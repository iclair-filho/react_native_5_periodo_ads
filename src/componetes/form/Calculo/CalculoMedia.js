import react from "react";
import {View, Text} from  'react-native'

export default function CalculoMedia(nota1, nota2, nota3) {
    
    const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) )/3 

      if (media<4) {
        alert('Sua média foi: ' + media.toFixed(2) + '. Você está REPROVADOR!');
      } else if (media>4 && media<7) {
        alert('Sua média foi: ' + media.toFixed(2) + '. Você está EM RECUPERAÇÃO!');
      }else if(media>7) {
        alert('Sua média foi: ' + media.toFixed(2) + '. Você está APROVADO!');
      }

    

    return(
        <View>
            <Text>
                {media}
            </Text>
        </View>

    )
}