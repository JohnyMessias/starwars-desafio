import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../style";
import { useNavigation } from "@react-navigation/native"


const PlanetDetails = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.views}>
            <Text style={styles.texts}>PlanetDetails</Text>
            <TouchableOpacity 
              style={{marginTop: 20, padding: 8, backgroundColor: "#ddd"}} 
              onPress={() => navigation.goBack()}>
              <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlanetDetails