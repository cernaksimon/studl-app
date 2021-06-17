import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native"
import { AuthContext } from '../context'

function Profile(props) {

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [password, setPassword] = useState();
  const [authKey, setAuthKey] = useState();
  const { signUp } = React.useContext(AuthContext)



  const regist = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ first_name: name, last_name: surname, password: password })
    };

    try {
      fetch('http://localhost:8000/api/updateUser/', requestOptions)
        .then(response => response.json())
        .then(data => {
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
    <Text style={styles.header}>Geslo</Text>
    <TextInput
      style={styles.textInput}
      placeholder='če želite spremeniti geslo, vpišite geslo'
      autoCapitalize="none"
      placeholderTextColor='#5496DE'
      onChangeText={val => setSurname(val)
      } />
    <TouchableOpacity
      style={styles.button}
      onPress={() => regist()}>
      <Text style={styles.buttonText}>SHRANI SPREMEMBE</Text>
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
    borderColor: '#dc143c`',
    borderRadius: 10,
    height: 50,
    width: 200,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: '#dc143c`'
  },
  buttonText: {
    alignContent: 'stretch',
    alignSelf: 'center',
    fontWeight: 'bold',
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

export default Profile;