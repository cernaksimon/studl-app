import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, ImageBackground } from 'react-native';
import FormLogin from './app/components/LoginScreen';
import FormRegistration from './app/components/RegistrationScreen';
import axios from 'axios';

export default function App() {
  const [data, useData]=useEffect()

  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );
    setData(result.data);
  });

  return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
          <ImageBackground
           style={styles.container}
           source={{
            uri: "https://picsum.photos/1800/1800"}}>
            <Text style={styles.studlApp}>Studl App</Text>
            <ul>
              {data.map(item => (
              <li>
                {item.email}
              </li>
              ))}
            </ul>
          </ImageBackground>
        </KeyboardAvoidingView> 
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  studlApp: {
    paddingTop: 0,
    paddingBottom: 25,
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 69,
    color: '#9053EE',

  },

  header: {
    fontSize: 38,
    color: '#5496DE',
    fontWeight: 'bold'
  }
});
