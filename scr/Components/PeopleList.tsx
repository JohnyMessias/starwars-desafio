import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../routes/Stack/Models";
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const navigation = useNavigation<propsStack>()
     const { peoples, onPress } = props;

      const items = peoples.map(people =>
        <PeopleListItem people={people} 
            onPress={() => navigation.navigate("CharacterDetails", people)}/>
      );

    return(
        
        <View style={styles.container}>
            { items }
        </View>
        )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#e2f9ff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
})

export default PeopleList