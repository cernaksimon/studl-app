import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, ImageBackground, ScrollView, Image } from "react-native"
import Employers from "./screens/Employers";
import Registration from "./screens/Registration";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import RateEmployers from "./screens/RateEmployers"
import { Icon } from 'react-native-elements'
import { AuthContext } from "./context";
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';



const ScreenContainer = ({ children }) => (
    <View>{children}</View>
)

export const LoginScreen = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext)
    return (
        <ScreenContainer style={styles.container}>
            <ImageBackground source={require('./images/students_bg.jpg')} style={styles.backgroundImage}>
            <View style={styles.formContainer}>
                <Image style={styles.imageL} source={require('./images/shtudlLOGO.png')}/>
                <Login style={styles.login}></Login>
                <Text style={styles.registracija}>Še nimate računa? <Button title="Registrirajte se tukaj!" onPress={() => navigation.push("RegisterScreen")} /></Text>
                <Text style={styles.ali}>ALI</Text>
                <Button title="Vstop kot neregistriran uporabnik!" onPress={() => signIn('123')} />
            </View>
            </ImageBackground>
        </ScreenContainer>
    )
};

export const RegisterScreen = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext)
    return (
        <ScreenContainer>
            <ScrollView style={styles.formContainer}>
                <Registration></Registration>
                <Text style={styles.registracija}>Že imate račun? <Button title="Login" onPress={() => navigation.push("LoginScreen")} /></Text>
                <Button title="Vstop kot neregistriran uporabnik!" onPress={() => signIn('123')} />
            </ScrollView>
        </ScreenContainer>
    )
};

export const HomeScreen = ({ navigation }) => {
    
    return (
        <ScreenContainer style={styles.formContainer}>
            <View style={styles.row}>
            <Icon name='align-justify' type='font-awesome-5' style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}/>
            <Image style={styles.image} source={require('./images/shtudlLOGO.png')}/>
            </View>
            <Home></Home>
        </ScreenContainer>
    )
};

export const ProfileScreen = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext)
    return (
    <ScreenContainer>
        <View style={styles.row}>
        <Icon name='align-justify' type='font-awesome-5' style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}/>
        <Image style={styles.image} source={require('./images/shtudlLOGO.png')}/>
        </View>
        <Profile/>
        <Button style={styles.button} title="Sign out" onPress={() => signOut()} />
    </ScreenContainer>
    )
};

export const EmployersScreen = ({ navigation }) => {
    return (
    <ScreenContainer>
        <View style={styles.row}>
        <Icon name='align-justify' type='font-awesome-5' style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}/>
        <Image style={styles.image} source={require('./images/shtudlLOGO.png')}/>
        </View>
        <Employers/>
    </ScreenContainer>
    )
};

export const RateEmployersScreen = ({ navigation }) => {
    return (
    <ScreenContainer>
        <View style={styles.row}>
        <Icon name='align-justify' type='font-awesome-5' style={styles.drawerButton} onPress={() => navigation.toggleDrawer()}/>
        <Image style={styles.image} source={require('./images/shtudlLOGO.png')}/>
        </View>
        <RateEmployers/>
    </ScreenContainer>
    )
};

export const Splash = () => (
    <ScreenContainer>
        <Text style={styles.ali}>Loading...</Text>
    </ScreenContainer>
);


const styles = StyleSheet.create({
    login: {
        marginTop:40,
        paddingTop: 100
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    image: {
        flexWrap: 'wrap',
        flex:0.5,
        height: 100,
        width: 150,
        alignSelf: 'center',
        alignItems: 'center',
    },
    imageL: {
        height: 100,
        width: 150,
        marginBottom: 50,
        alignSelf: 'center',
        alignItems: 'center',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },  
    drawerButton: {
        alignSelf: 'flex-start',
        paddingLeft: 5, 
        marginRight: 350
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
        paddingBottom: 200,
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