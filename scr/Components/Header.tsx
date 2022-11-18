import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = props => (
    <View style={styles.container}>
        <Text style={styles.title}> { props.title }</Text>
    </View>
);

export default Header;

const styles = StyleSheet.create({
    container:{
        marginTop: 0,
        backgroundColor: '#6ca2f7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 50,
        color: 'white',
    }
})
