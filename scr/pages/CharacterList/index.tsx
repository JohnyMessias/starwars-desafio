import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../routes/Stack/Models";

import Header from "../../Components/Header";
import PeopleList from "../../Components/PeopleList";
import axios from 'axios'

export default class CharacterList extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        peoples: []
      };

    }

    componentDidMount(): void {
      axios
      .get('https://swapi.dev/api/people/')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        });
      })
    }

    render(){
      return ( 
        <View>
          <Header title="Personagens" />
          <PeopleList peoples={this.state.peoples} />
        </View>
      )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 20,
  },
  containerBody: {
    flex: 1,
    
    backgroundColor: '#aaa',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 20,
  },
  topo: {
    height: 100,
    paddingTop: 50,
    marginBottom: 20,
    backgroundColor: '#e73e33'
  },
  topoTitulo: {
    fontSize: 22,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center'
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 4,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10
  },
  cardTitle: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    color: '#656565'
  },

  pokemonBox: {
    alignItems: 'center'
  },
  pokemonNome: {
    fontSize: 22,
  },
  pokemonPeso: {
    fontSize: 18
  },  
  pokemonImg:{
    width: 150,
    height: 150,
  }
})