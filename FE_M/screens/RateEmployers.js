import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native"
import { Icon } from 'react-native-elements'
import { AuthContext } from '../context'

function RateEmployers(props) {

    const [employers, setEmployers] = useState();
    const [employer, setEmployer] = useState();
    const [rating, setRating] = useState();
    const [authKey, setAuthKey] = useState();
    const [isLoading, setIsLoading] = useState();


    useEffect(() => {
        fetch('http://localhost:8000/api/employers')
            .then((response) => response.json())
            .then((json) => {
                setEmployers(json);
            })
            .catch((error) => console.error(error))
            .finally(() => {
                setIsLoading(false);
            });
    }, [])


    const rate = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: authKey, employer_id: employer, rating: rating })
        };

        try {
            fetch('http://localhost:8000/api/rateEmployer/', requestOptions)
                .then(response => response.json())
                .then();
        } catch (err) {
        }
    }




    return <View style={{ flex: 1, padding: 24 }}>
        <View style={styles.card}>
            <Text style={styles.header}>Rate employer</Text>
            <TextInput
            keyboardType={'numeric'}
            placeholder={'Rating'}
            onChangeText={val => setRating(val)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => rate()}>
                <Text style={styles.buttonText}>SEND RATING</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
    },
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

export default RateEmployers;