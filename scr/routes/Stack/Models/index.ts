import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type propsNavigationStack = {
    Home: undefined,
    Login: undefined,
    CharacterList: undefined,
    CharacterDetails: {
        name: string,
    },
    PlanetList: undefined,
    PlanetDetails: {
        name: string,
    },
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>