import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = {email: email, password: password}
  

  return (
      <View style={styles.formContainer}>
        <Text style={styles.header}>E-mail</Text>
        <TextInput style={styles.textInput} keyboardType='email-address' onChangeText={val=>setEmail(val)}/>
        <Text style={styles.header}>Geslo</Text>
        <TextInput 
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={val=>setPassword(val)}
        />
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>    
        </TouchableOpacity>
        <Text style={styles.registracija}>Še nimate računa? <Text style={styles.registracija1}>Registrirajte se tukaj!</Text></Text>
        <Text style={styles.ali}>ALI</Text>
        <Text style={styles.registracija1}>Vstop kot neregistriran uporabnik.</Text>
      </View>      
  );
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
        marginTop: 10,
        marginBottom: 10,
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
