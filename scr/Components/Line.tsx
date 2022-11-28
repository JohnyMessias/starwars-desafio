import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Line = ({label, content}) => {
    return (
        <View style={styles.line}>
            <Text style={[styles.cellPrimaria, styles.cellSecundaria]}> { label } </Text>
            <Text style={styles.cellPrimaria}> { content } </Text>
        </View>
    );
}

export default Line

const styles = StyleSheet.create ({
    line: {
        flexDirection: 'row',
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: '#c5c5c5'
    },
    cellPrimaria: {
        fontSize: 18,
        paddingLeft: 5,
    },
    cellSecundaria: {
        fontWeight: 'bold',
    },
});

