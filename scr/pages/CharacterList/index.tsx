import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../routes/Stack/Models";

const pernonagensIniciais = [
  { id: 1, nome: "Personagem 01"},
  { id: 4, nome: "Personagem 04"},
  { id: 7, nome: "Personagem 07"},
];

const CharacterList = () => {
    const navigation = useNavigation<propsStack>() 

    const [allPersons, setAllPersons ] = useState(null)
    const [ personagemEscolhido, setPersonagemEscolhido ] = useState(null);
    
    const getPersonData = (idPerson) => {
      const endpoint = `https://swapi.dev/api/people/${idPerson}/`;
  
      fetch(endpoint)
        .then(response => response.json())
          .then( result => {
            const person = {
              nome: result.name,
              planetaOrigem: result.homeworld,
              genero: result.gender,
              anoNascimento: result.birth_year,
              peso: result.mass,
            };
  
            setPersonagemEscolhido(person);
          })
          .catch(() => {
            Alert.alert('Erro', 'Não foi possível carregar os dados do personagem');
          });
  
    }

    function getAllPersons(){
      const endpoint = `https://swapi.dev/api/people/`;
  
      fetch(endpoint)
        .then(response => response.json())
          .then( result => {
            const persons = result.results.map(person => person.name)
            console.log("##Persons",persons)
            return persons
          })
          .catch(() => {
            Alert.alert('Erro', 'Não foi possível carregar a lista de personagens');
          });
  
    }

    return (
      
      <View style={styles.container}>
        <View style={styles.topo}>
          <Text style={styles.topoTitulo}>Lista de Personagens</Text>
        </View>
    </View>
    )
}

export default CharacterList

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
});

function render() {
    throw new Error("Function not implemented.");
  }
