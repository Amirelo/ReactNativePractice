import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Text, TextInput, View, Image, Button, SafeAreaView, 
  ScrollView, FlatList, SectionList, Pressable, TouchableOpacity, 
  ToastAndroid, ImageBackground } from 'react-native';
import myStyles from './public/stylesheets/myStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './views/LoginScreen';
import RegisterScreen from './views/RegisterScreen';
import AchievementScreen from './views/AchievementScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "Register" component={RegisterScreen}/>
        <Stack.Screen name = "Achievement" component={AchievementScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );


}

