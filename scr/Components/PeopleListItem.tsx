import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { capitalizeFirstLetter } from '../util'

const PeopleListItem = props => {
     const { people } = props
     const { name, gender } = people
        return (
            <TouchableOpacity style={styles.line} key={name} onPress={() => console.log('Clicou em ', name)}>
                <Image style={styles.iconList} source={require("../../assets/icon.png")} ></Image>
                <View style={styles.contentText}>
                    <Text style={styles.lineText}> { `Nome: ${name} ` }</Text>
                    <Text style={styles.lineTextSec}> { `Genero: ${capitalizeFirstLetter(gender)}` }</Text>
                </View>
            </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    line:{
        width:'100%',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "bbb",
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        
    },
    lineText:{
        fontSize: 20,
        marginStart: 10,
    },
    lineTextSec:{
        fontSize: 16,
        marginStart: 10,
    },
    iconList:{
        flex:1,
        aspectRatio: 1,
        borderRadius: 50,
    },
    contentText:{
        flex:7,
    }
})

export default PeopleListItem