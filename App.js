import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/authen/LoginScreen';
import RegisterScreen from './src/screens/authen/RegisterScreen';
import AchievementScreen from './src/screens/main/AchievementScreen';
import HomeScreen from './src/screens/main/HomeScreen';
import ForgotPassword from './src/screens/authen/ForgotPasswordScreen';
import ConfirmEmailScreen from './src/screens/authen/ConfirmEmailScreen';
import ResetPasswordScreen from './src/screens/authen/ResetPasswordScreen';
import { AuthContext } from './utils/Utils';


const Stack = createNativeStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);


  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {(state.userToken != null)?
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Achievement" component={AchievementScreen}/>
    </Stack.Navigator>
      :
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name = "SignIn" title="Login" component={LoginScreen}/>
        <Stack.Screen name = "Register" component={RegisterScreen}/>
        <Stack.Screen name = "Forgot password" component={ForgotPassword}/>
        <Stack.Screen name = "Confirm Sign Up" component={ConfirmEmailScreen}/>
        <Stack.Screen name ="Reset password" component={ResetPasswordScreen}/>
      </Stack.Navigator>
      }
    </NavigationContainer>
    </AuthContext.Provider>
  );


}

