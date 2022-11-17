import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../style";
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../routes/Stack/Models";

const Home = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={styles.views}>
            <Text style={styles.texts}>HOME</Text>
            <TouchableOpacity
              style={{marginTop: 50, padding: 8, backgroundColor: "#ddd"}} 
              onPress={() => navigation.navigate("PlanetList")}>
              <Text>Planetas</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{marginTop: 20, padding: 8, backgroundColor: "#ddd"}} 
              onPress={() => navigation.navigate("CharacterList")}>
              <Text>Personagens</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home