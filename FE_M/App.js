import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from  '@react-navigation/stack';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { AuthContext } from './context'

import { RegisterScreen, LoginScreen, HomeScreen, Splash, ProfileScreen, EmployersScreen, RateEmployersScreen} from './Screens';


const AuthStack = createStackNavigator(); 
const Drawer = createDrawerNavigator();

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
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Employers" component={EmployersScreen}/>
            { authKey!='123'?
            [
            <Drawer.Screen name="Rate Employers" component={RateEmployersScreen}/>,
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
            ]
            :
            <AuthStack.Screen name="Login" component={LoginScreen} authKey={''}/>
            }
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
