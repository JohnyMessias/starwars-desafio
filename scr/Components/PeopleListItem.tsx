import React, { Component } from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
import { capitalizeFirstLetter } from '../util'

const PeopleListItem = props => {
     const { people } = props
     const { name, gender } = people
        return (
            <View style={styles.line} key={name}>
                <Image style={styles.iconList} source={require("../../assets/icon.png")} ></Image>
                <View>
                    <Text style={styles.lineText}> { `Nome: ${name} ` }</Text>
                    <Text style={styles.lineTextSec}> { `Genero: ${capitalizeFirstLetter(gender)}` }</Text>
                </View>
            </View>
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
        height: 40,
        width: 40,
        borderRadius: 100,
    }
})

export default PeopleListItem