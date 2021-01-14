import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native"
import Home from './screens/Home'
import Login from './screens/Login'
import Registration from './screens/Registration'
import { AuthContext } from "./context";


const ScreenContainer = ({ children }) => (
    <View>{children}</View>
)

export const LoginScreen = ({navigation}) => {
    return(
    <ScreenContainer style={styles.container}>
        <View style={styles.formContainer}>
        <Login></Login>
        <Text style={styles.registracija}>Še nimate računa? <Button title="Registrirajte se tukaj!" onPress={()=>navigation.push("RegisterScreen")}/></Text>
        <Text style={styles.ali}>ALI</Text>
        <Button title="Vstop kot neregistriran uporabnik!" onPress={()=>navigation.push("HomeScreen")}/>
        </View>
    </ScreenContainer>
    )
};

export const RegisterScreen = ({navigation}) => (
    <ScreenContainer>
        <ScrollView style={styles.formContainer}>
        <Registration></Registration>
        <Text style={styles.registracija}>Že imate račun? <Button  title="Login" onPress={()=>navigation.push("LoginScreen")}/></Text>
        <Button title="Vstop kot neregistriran uporabnik!" onPress={()=>navigation.push("HomeScreen")}/>
        </ScrollView>
    </ScreenContainer>
);

export const HomeScreen = ({navigation}) => (
    <ScreenContainer style={styles.formContainer}>
        <Home></Home>
        <Button style={styles.button} title="Sign out" onPress={()=>navigation.push("LoginScreen")}/>
    </ScreenContainer>
);


const styles = StyleSheet.create({
    ali: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 40,
        paddingRight: 40,
    },
    formContainer: {
        alignSelf: 'stretch',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 60,
        paddingBottom: 200,
        backgroundColor: '#5496DE'
    },
    bottom: {
        alignSelf: 'stretch',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 100,
        color: '#5496DE'
    },
    button: {
        alignSelf: 'center',
        borderColor: 'rgba(255,255,255,0.8)', 
        borderRadius: 10,
        height: 50,
        width: 200,
        marginTop: 5,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    buttonText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        paddingTop: 10,
        color: '#5496DE'
    },
    header: {
        fontSize: 25,
        color: '#5496DE',
        alignSelf:'center',
        backgroundColor: '#fff',
        fontWeight: 'bold'
    },
    registracija: {
        fontSize: 15,
        color: '#fff',
        alignSelf:'center'
    },
    registracija1: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        color: '#fff',
        alignSelf:'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#5496DE',
        alignItems: 'center',
        justifyContent: 'center',
      },
    textInput: {
        borderColor: 'rgba(255,255,255,0.8)', 
        borderRadius: 10,
        alignSelf: 'stretch',
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: 'rgba(255,255,255,0.9)'
    }
});