import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../../pages/Home"
import Login from "../../pages/Login"
import CharacterDetails from "../../pages/CharacterDetails"
import CharacterList from "../../pages/CharacterList"
import PlanetDetails from "../../pages/PlanetDetails"
import PlanetList from "../../pages/PlanetsList"
import { propsNavigationStack } from "./Models"

const Stack = createNativeStackNavigator()

export default function Routes() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
               name="Home" 
               component={Home} />
            <Stack.Screen 
               name="CharacterDetails" 
               component={CharacterDetails} />
            <Stack.Screen 
               name="CharacterList" 
               component={CharacterList} />
            <Stack.Screen 
               name="PlanetDetails" 
               component={PlanetDetails} />
            <Stack.Screen 
               name="PlanetList" 
               component={PlanetList} />
        </Stack.Navigator>
    )
}