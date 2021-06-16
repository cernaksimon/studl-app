import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from  '@react-navigation/stack';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { AuthContext } from './context'

import { RegisterScreen, LoginScreen, HomeScreen, Splash} from './Screens';


const AuthStack = createStackNavigator(); 
const Drawer = createDrawerNavigator();
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




export default () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [authKey, setAuthKey] = React.useState(null);
  const authContext = React.useMemo(()=>{
    return{
      signIn: (authKey) => {
        console.log(authKey)
        setIsLoading(false);
        setAuthKey(authKey);
      },
      signUp: (authKey) => {
        setIsLoading(false);
        setAuthKey(authKey)
      },
      signOut: () => {
        setAuthKey(null)
      }
    }
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />
  }

  return (
    <AuthContext.Provider value = {authContext} >
    <NavigationContainer>
      {authKey ? (
          <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
          </Drawer.Navigator>
        ) : (
          <AuthStack.Navigator headerMode='none' >
            <AuthStack.Screen name="LoginScreen" component={LoginScreen}/>
            <AuthStack.Screen name="RegisterScreen" component={RegisterScreen}/>
          </AuthStack.Navigator>
        )
      }
    </NavigationContainer>
    </AuthContext.Provider>
  )
}
