import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, ImageBackground } from 'react-native';
import FormLogin from './app/components/LoginScreen';
import FormRegistration from './app/components/RegistrationScreen';

export default function App() {
  const [data, setData]=useState()

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/all_jobs/").then(
        res => console.log(res.json())
    )
})
  return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
          <ImageBackground
           style={styles.container}
           source={{
            uri: "https://picsum.photos/1800/1800"}}>
            <Text style={styles.studlApp}>Studl App</Text>
            <Text>
              {data}
            </Text>
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
