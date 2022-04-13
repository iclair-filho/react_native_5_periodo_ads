import React from "react";
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator, tabBarOptions} from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import Pesquisa from './pages/Pesquisa';
import Profile from './pages/Profile';
import CalculoMedia from "./pages/CalculoMedia";
import ValidaValor from "./pages/ValidaValor";

const Tab = createBottomTabNavigator();

export default function Router(){
    return(
        <Tab.Navigator
            style={styles.taboption}
        >
            <Tab.Screen
            name = "Calculo da Média"
            component={CalculoMedia}
            options={{
                tabBarIcon:({size, color})=>(
                    <AntDesign name="calculator" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen
            name = "Validar Valor"
            component={ValidaValor}
            options={{
                tabBarIcon:({size, color})=>(
                    <AntDesign name="checksquare" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen
            name = "Pesquisa"
            component={Pesquisa}
            options={{
                tabBarIcon:({size, color})=>(
                    <AntDesign name="search1" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen
            name = "Usuário"
            component={Profile}
            options={{
                tabBarIcon:({size, color})=>(
                    <AntDesign name="user" size={24} color="black" />
                )
            }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    taboption:{
        backgroundColor: 'black'
    }
    
  
  });
  