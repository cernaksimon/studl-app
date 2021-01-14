import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native"

  class Login extends React.Component {
    render() {
      return <View>
      <Text style={styles.header}>E-mail</Text>
      <TextInput style={styles.textInput} keyboardType='email-address' />
      <Text style={styles.header}>Geslo</Text>
      <TextInput 
      style={styles.textInput}
      secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>LOGIN</Text>    
      </TouchableOpacity>
      </View>
    }
  }

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

  {/* <Image style={styles.image} source={require('./app/img/shtudlLOGO.png')}/> */}
  export default Login;