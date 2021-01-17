import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from  '@react-navigation/stack';
import { AuthContext } from './context'

import { RegisterScreen, LoginScreen, HomeScreen } from './Screens';


// const authContext = React.useMemo(()=>{
//   return{
//     signIn: () => {
//       setUserAuth("user")
//     },
//     signUp: () => {
//       setUserAuth("user")
//     },
//     signOut: () => {
//       setUserAuth(null)
//     }
//   }
// })

const AuthStack = createStackNavigator(); 
// const AuthStackScreen = () => (
//   <AuthStack.Navigator headerMode="none">
//       <AuthStack.Screen name="Login" component={Login}/>
//       <AuthStack.Screen name="Register" component={Register}/>
//       <AuthStack.Screen name="Home" component={Home}/>
//   </AuthStack.Navigator>  
// )

// const RootStack = createStackNavigator();
// const RootStackScreen = ({userAuth}) => (
//   <RootStack.Navigator headerMode="none">
//     {userAuth ? 
//     (<RootStack.Screen name="Auth" component={AuthStackScreen}/>)
//     :
//     (<RootStack.Screen name="App" component={Home}/>)
//     }
//   </RootStack.Navigator>
// )




export default () => (
  <NavigationContainer>
  <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="LoginScreen" component={LoginScreen}/>
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen}/>
      <AuthStack.Screen name="HomeScreen" component={HomeScreen}/>
   </AuthStack.Navigator>
  </NavigationContainer>
)
