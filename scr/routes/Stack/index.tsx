import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../../pages/Home"
import Login from "../../pages/Login"
import CharacterDetails from "../../pages/CharacterDetails"
import CharacterList from "../../pages/CharacterList"
import PlanetDetails from "../../pages/PlanetDetails"
import PlanetList from "../../pages/PlanetsList"
import { propsNavigationStack } from "./Models"
import styles from "../../style"
import { Header } from "react-native/Libraries/NewAppScreen"
import { setStatusBarBackgroundColor } from "expo-status-bar"

const Stack = createNativeStackNavigator()

export default function Routes() {
    return(
        <Stack.Navigator initialRouteName="CharacterList">
            <Stack.Screen 
               name="Home" 
               component={Home} />
            <Stack.Screen 
               name="Login" 
               component={Login} />
            <Stack.Screen 
               name="CharacterDetails" 
               component={CharacterDetails} 
               options={{
                  title: 'Detalhe do personagem',
                  headerStyle:{
                     backgroundColor: '#6ca2f7'
                  },
                  headerTintColor: '#FFF',
                  headerTitleStyle:{
                     fontWeight: 'bold',
                  },
                  headerTitleAlign: 'center'
               }}
               />
            <Stack.Screen 
               name="CharacterList" 
               component={CharacterList}
               options={{
                  title: 'Personagens',
                  headerStyle:{
                     backgroundColor: '#6ca2f7'
                  },
                  headerTintColor: '#FFF',
                  headerTitleStyle:{
                     fontWeight: 'bold',
                  },
                  headerTitleAlign: 'center'
               }}
               />
            <Stack.Screen 
               name="PlanetDetails" 
               component={PlanetDetails} />
            <Stack.Screen 
               name="PlanetList" 
               component={PlanetList} />
        </Stack.Navigator>
    )
}