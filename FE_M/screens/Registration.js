import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native"
import { AuthContext } from '../context'

function Registration(props) {

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [authKey, setAuthKey] = useState();
  const { signUp } = React.useContext(AuthContext)



  const regist = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first_name: name, last_name: surname, email: email, password: password, password2: password2 })
    };

    try {
      fetch('http://localhost:8000/api/register/', requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data.token !== undefined && data.token !== null) {
            signUp(data.token)
          }
        });
    } catch (err) {
    }
  }




  return <View>
    <Text style={styles.header}>Ime</Text>
    <TextInput
      style={styles.textInput}
      placeholder='ime'
      autoCapitalize="none"
      placeholderTextColor='#5496DE'
      onChangeText={val => setName(val)
      } />
    <Text style={styles.header}>Priimek</Text>
    <TextInput
      style={styles.textInput}
      placeholder='priimek'
      autoCapitalize="none"
      placeholderTextColor='#5496DE'
      onChangeText={val => setSurname(val)
      } />
    <Text style={styles.header}>E-mail</Text>
    <TextInput
      style={styles.textInput}
      placeholder='email'
      autoCapitalize="none"
      placeholderTextColor='#5496DE'
      onChangeText={val => setEmail(val)
      } />
    <Text style={styles.header}>Geslo</Text>
    <TextInput
      secureTextEntry={true}
      style={styles.textInput}
      placeholder='geslo'
      autoCapitalize="none"
      placeholderTextColor='#5496DE'
      onChangeText={val => setPassword(val)
      } />
    <Text style={styles.header}>Ponovljeno Geslo</Text>
    <TextInput
      secureTextEntry={true}
      style={styles.textInput}
      placeholder='ponovite geslo'
      autoCapitalize="none"
      placeholderTextColor='#5496DE'
      onChangeText={val => setPassword2(val)
      } />
    <TouchableOpacity
      style={styles.button}
      onPress={() => regist()}>
      <Text style={styles.buttonText}>REGISTRACIJA</Text>
    </TouchableOpacity>
  </View>
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
    alignSelf: 'center',
    backgroundColor: '#fff',
    fontWeight: 'bold'
  },
  registracija: {
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center'
  },
  registracija1: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    color: '#fff',
    alignSelf: 'center',
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

export default Registration;