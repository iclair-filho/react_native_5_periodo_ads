import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function HeaderPrincipal(){
    return(
    
      <LinearGradient style={styles.header} colors={['#F7C21C', 'transparent']}>
        <AntDesign style={styles.icon} name="home"/>
        <Text style={styles.title}>Imobiliária João Victor e Iclair</Text>
  
      </LinearGradient>
      
    
    )
}

const styles = StyleSheet.create({
    header:{
        height:"15%",
        width:"100%",
        paddingTop:50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
      },
      title:{
        textAlign: 'center',
        fontSize:30,
        fontWeight:'700',
        color:'black'
      },
      icon:{
        flex:1,
        fontSize:50,
        color:"black",
        textAlign:'center',
        marginBottom:0

        
      }
});
    