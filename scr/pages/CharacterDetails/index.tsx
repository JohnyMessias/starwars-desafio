import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Line from "../../Components/Line"
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../routes/Stack/Models";

const CharacterDetails = props => {
    const { personagem } = props
    const navigation = useNavigation<propsStack>()
    
    return (
        <View style={styles.container} >
            <Image
                source= {{uri: 'https://i.pinimg.com/originals/30/62/b7/3062b79daf7a40a7701f250bb9d412e5.png'}}
                style={styles.image}
            />
            <View style={styles.detailContainer}>
                <Line label="Nome:" content="Personagem 01"/>
                <Line label="Planeta de Origem:" content="Planeta 01"/>
                <Line label="Gênero:" content="Gênero 01"/>
                <Line label="Ano de nascimento:" content="1870"/>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    detailContainer:{
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1,
    },
    image: {
        height: '45%',
        resizeMode: 'contain'
    },
  })

export default CharacterDetails