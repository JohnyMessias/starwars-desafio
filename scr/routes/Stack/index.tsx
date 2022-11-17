import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../../screens/Home"
import Login from "../../screens/Login"
import CharacterDetails from "../../screens/CharacterDetails"
import CharacterList from "../../screens/CharacterList"
import PlanetDetails from "../../screens/PlanetDetails"
import PlanetList from "../../screens/PlanetsList"
import { propsNavigationStack } from "./Models"

const {Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login} />
            <Screen name="Home" component={Home} />
            <Screen name="CharacterDetails" component={CharacterDetails} />
            <Screen name="CharacterList" component={CharacterList} />
            <Screen name="PlanetDetails" component={PlanetDetails} />
            <Screen name="PlanetList" component={PlanetList} />
        </Navigator>
    )
}