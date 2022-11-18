import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../routes/Stack/Models";
import { ImageBackground } from "react-native";
import Header from "../../Components/header/Header";

export default function Home() {
    const imageSW2 = { uri: "https://us.123rf.com/450wm/regioeligo/regioeligo1811/regioeligo181100004/115675483-vector-abstract-background-with-open-space-star-warp-or-hyperspace-travel-big-bang-illustration-.jpg?ver=6" };
    const navigation = useNavigation<propsStack>()
    
    return (
      <ImageBackground source={imageSW2} resizeMode="cover" style={styles.container}>
      <SafeAreaView style={styles.container}>
            <TouchableOpacity
              style={styles.button} 
              onPress={() => navigation.navigate("PlanetList")}>
              <Text style={styles.textButtons}>Planetas</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate("CharacterList")}>
              <Text style={styles.textButtons}>Personagens</Text>
            </TouchableOpacity>
      </SafeAreaView>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:"#332fffa3",
      flex: 1,
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center'
  },
  containerMain:{
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textButtons:{
    fontSize: 20,
    fontWeight: "bold",
  },
  button:{
    marginTop: 20, 
    padding: 8, 
    width: "80%",
    height: 60,
    borderRadius: 40,
    borderColor: "#353536",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd"
  },
})