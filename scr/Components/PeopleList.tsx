import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
     const { peoples } = props;

      const items = peoples.map(people =>
        <PeopleListItem people={people} />
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