import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, ImageBackground } from 'react-native';
import FormLogin from './resources/components/FormLogin';
import FormRegistration from './resources/components/FormRegistration';

export default function App() {
  return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
          <ImageBackground style={styles.container} source={require('./resources/img/students_bg.jpg')}>
            <Text style={styles.studlApp}>Studl App</Text>
            <FormRegistration/>
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
    paddingTop: 50,
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
