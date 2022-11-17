import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../style";
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../routes/Stack/Models";


const PlanetList = () => {
    const navigation = useNavigation<propsStack>()

    return (
        <View style={styles.views}>
            <Text style={styles.texts}>PlanetList</Text>
            <TouchableOpacity
              style={{marginTop: 50, padding: 8, backgroundColor: "#ddd"}} 
              onPress={() => navigation.navigate("PlanetDetails", {name: "Planeta 01"})}>
              <Text>Detalhes do Planeta</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{marginTop: 20, padding: 8, backgroundColor: "#ddd"}} 
              onPress={() => navigation.goBack()}>
              <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlanetList