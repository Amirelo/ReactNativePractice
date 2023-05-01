import { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './views/authen/LoginScreen';
import RegisterScreen from './views/authen/RegisterScreen';
import AchievementScreen from './views/main/AchievementScreen';
import HomeScreen from './views/main/HomeScreen';
import ForgotPassword from './views/authen/ForgotPasswordScreen';
import VerificationScreen from './views/authen/VerificationScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn?
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Achievement" component={AchievementScreen}/>
    </Stack.Navigator>
      :
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "Register" component={RegisterScreen}/>
        <Stack.Screen name = "Forgot password" component={ForgotPassword}/>
        <Stack.Screen name = "Verification" component={VerificationScreen}/>
      </Stack.Navigator>
      }
    </NavigationContainer>
  );


}

