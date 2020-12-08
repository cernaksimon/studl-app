import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, ImageBackground } from 'react-native';
import FormLogin from './app/components/LoginScreen';
import FormRegistration from './app/components/RegistrationScreen';

export default function App() {
  return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
          <ImageBackground
           style={styles.container}
           source={{
            uri: "https://picsum.photos/1800/1800"}}>
            <Text style={styles.studlApp}>Studl App</Text>
            <FormLogin/>
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
