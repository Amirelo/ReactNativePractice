import { createContext, useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/authen/LoginScreen';
import RegisterScreen from './src/screens/authen/RegisterScreen';
import AchievementScreen from './src/screens/main/AchievementScreen';
import HomeScreen from './src/screens/main/HomeScreen';
import ForgotPassword from './src/screens/authen/ForgotPasswordScreen';
import ConfirmEmailScreen from './src/screens/authen/ConfirmEmailScreen';
import ResetPasswordScreen from './src/screens/authen/ResetPasswordScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState([]);


  async function checkUser(){
    let userResponse = await AsyncStorage
  }


  return (
    <NavigationContainer>
      {(isLoggedIn == null)?
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Achievement" component={AchievementScreen}/>
    </Stack.Navigator>
      :
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "Register" component={RegisterScreen}/>
        <Stack.Screen name = "Forgot password" component={ForgotPassword}/>
        <Stack.Screen name = "Confirm Sign Up" component={ConfirmEmailScreen}/>
        <Stack.Screen name ="Reset password" component={ResetPasswordScreen}/>
      </Stack.Navigator>
      }
    </NavigationContainer>
  );


}

