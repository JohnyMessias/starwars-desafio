import React, {useState} from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../routes/Stack/Models";
import * as Animatable from 'react-native-animatable'

export default function Login() {
    const image = "../../../assets/splash.png";
    const imageSW2 = { uri: "https://us.123rf.com/450wm/regioeligo/regioeligo1811/regioeligo181100004/115675483-vector-abstract-background-with-open-space-star-warp-or-hyperspace-travel-big-bang-illustration-.jpg?ver=6" };
    const imageSW = { uri: "https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png" };
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const navigation = useNavigation<propsStack>()
                    
    function loginClick(){
        if(user != null && password != null){
            Alert.alert("Olá " + user)
            navigation.navigate("Home")
            setUser(null)
            setPassword(null)
        }
        else{
            Alert.alert("Campos vazios")
        }
        
    }

    return (
        <ImageBackground source={imageSW2} resizeMode="cover" style={styles.container}>
          <SafeAreaView style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Animatable.Text 
                    style={styles.title} 
                    animation="slideInDown" 
                    iterationCount={5} 
                    direction="alternate">Seja bem vindo!</Animatable.Text>
                <Animatable.Image
                    animation="pulse" easing="ease-out" iterationCount={5}
                    style={styles.logo}
                    source={require("../../../assets/logo.png")}
                 />
            </View>
            <Animatable.View
                animation="fadeInUp"
                style={styles.containerInputs}>
                <TextInput 
                    style={styles.inputs}
                    onChangeText={setUser}
                    value={user}
                    keyboardType="email-address"
                    placeholder="Digite seu usuário" />
                <TextInput 
                    style={styles.inputs} 
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Digite sua senha" />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => loginClick()}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </Animatable.View>
          </SafeAreaView>
        </ImageBackground>
        
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#66ff00b5",
        flex: 1,
    },
    containerLogo:{
        flex: 3,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    containerInputs:{
        backgroundColor:"#2600ffb5",
        flex: 2,
        paddingTop: 20,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    logo:{
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 30,
        color: "#fff",
    },
    inputs:{
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 5,
    },
    button:{
        width: 300,
        height: 42,
        backgroundColor: "#07b123",
        marginTop: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    textButton:{
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
})