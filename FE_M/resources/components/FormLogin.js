import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  return (
      <View style={styles.formContainer}>
        <Text style={styles.header}>Uporabniško ime</Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.header}>Geslo</Text>
        <TextInput style={styles.textInput}
                   secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>    
        </TouchableOpacity>
      </View>      
  );
}

const styles = StyleSheet.create({
    formContainer: {
        alignSelf: 'stretch',
        paddingLeft: 40,
        paddingRight: 40,
    },
    button: {
        alignSelf: 'center',
        borderColor: 'rgba(255,255,255,0.8)', 
        borderRadius: 10,
        height: 50,
        width: 200,
        marginTop: 50,
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
