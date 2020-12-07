import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
      <ScrollView style={styles.formContainer}>
        <Text style={styles.header}>Ime</Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.header}>Priimek</Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.header}>E-mail</Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.header}>Naslov</Text>
        <TextInput style={styles.textInput}/>
        <Text style={styles.header}>Geslo</Text>
        <TextInput style={styles.textInput}
                   secureTextEntry={true}
        />
        <Text style={styles.header}>Ponovi Geslo</Text>
        <TextInput style={styles.textInput}
                   secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGISTRACIJA</Text>    
        </TouchableOpacity>
      </ScrollView>      
  );
}

const styles = StyleSheet.create({
    formContainer: {
        alignSelf: 'stretch',
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 100,
        marginBottom: 0
    },
    button: {
        alignSelf: 'center',
        borderColor: 'rgba(255,255,255,0.8)', 
        borderRadius: 10,
        height: 50,
        width: 200,
        marginTop: 20,
        marginBottom: 10,
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
