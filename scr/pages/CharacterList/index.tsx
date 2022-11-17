import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../style";
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../routes/Stack/Models";


const CharacterList = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={styles.views}>
            <Text style={styles.texts}>CharacterList</Text>
            <TouchableOpacity
              style={{marginTop: 50, padding: 8, backgroundColor: "#ddd"}} 
              onPress={() => navigation.navigate("CharacterDetails", {name: "Personagem 01"})}>
              <Text>Detalhes do Personagem</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{marginTop: 20, padding: 8, backgroundColor: "#ddd"}} 
              onPress={() => navigation.goBack()}>
              <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CharacterList