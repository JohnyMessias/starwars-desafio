import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../../pages/Home"
import Login from "../../pages/Login"
import CharacterDetails from "../../pages/CharacterDetails"
import CharacterList from "../../pages/CharacterList"
import PlanetDetails from "../../pages/PlanetDetails"
import PlanetList from "../../pages/PlanetsList"
import { propsNavigationStack } from "./Models"

const {Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login} />
            <Screen name="Home" component={Home} />
            <Screen name="CharacterDetails" component={CharacterDetails} />
            <Screen name="CharacterList" component={CharacterList} />
            <Screen name="PlanetDetails" component={PlanetDetails} />
            <Screen name="PlanetList" component={PlanetList} />
        </Navigator>
    )
}