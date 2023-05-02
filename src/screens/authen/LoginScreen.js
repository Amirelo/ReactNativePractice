import { createContext, useState, useEffect } from 'react';
import React from 'react';
import {
  Text, TextInput, Image, SafeAreaView, Pressable, useWindowDimensions, StyleSheet, ScrollView
} from 'react-native';
import myStyles from '../../../public/stylesheets/myStyles';
import showToast from '../../../utils/ShowToast';
import InputLayout from '../../components/itemLayout/InputLayout';
import CustomButton from '../../components/itemLayout/ButtonLayout';

const LoginScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [buttonPressed, isButtonPressed] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  const loginCheck = () => {
    username === "a" && password === "a" ? [showToast("Login successful")] : showToast("Wrong email or password")
  }

  const loginWithGoogle = () => {
    console.warn("Google");
  }
  const loginWithFacebook = () => {
    console.warn("Facebook");
  }
  const loginWithApple = () => {
    console.warn("Apple");
  }

  const onRegisterPress = () => {
    navigation.navigate("Register");
  }

  const onForgotPasswordPress = () => {
    navigation.navigate("Forgot password");
  }

  return (

    <SafeAreaView style={myStyles.container}>
      <ScrollView style={styles.scrollcontainer} showsVerticalScrollIndicator={false}>
        <SafeAreaView style={myStyles.container}>
          <Image style={[myStyles.imageHeader, { height: height * 0.3 }]}
            source={{uri: "https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_960_720.png"}}
            resizeMode='stretch' />

          <InputLayout
            placeholder={"Username"}
            inputMode={"none"}
            isSecure={false}
            value={username}
            setValue={setUsername} />

          <InputLayout
            placeholder={"Password"}
            inputMode={"none"}
            isSecure={true}
            value={password}
            setValue={setPassword} />

          <CustomButton
            onPress={onForgotPasswordPress}
            text={"Forgot password"}
            type='TERTIARY'
            direction={"right"} />

          <CustomButton
            onPress={loginCheck}
            text={"Sign In"} />

          <CustomButton
            onPress={loginWithFacebook}
            text={"Sign In with Facebook"}
            bgColor={"#E7EAF4"}
            fgColor={"#4765A9"} />

          <CustomButton
            onPress={loginWithGoogle}
            text={"Sign In with Google"}
            bgColor="#FAE9EA"
            fgColor="#DD4D44" />

          <CustomButton
            onPress={loginWithApple}
            text={"Sign In with Apple"}
            fgColor={"#e3e3e3"}
            bgColor={"#363636"} />

          

          <CustomButton
            onPress={onRegisterPress}
            text={"Don't have an account? Create one"}
            type='TERTIARY' />

        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  scrollcontainer: {
    width: '100%'
  }
})

export default LoginScreen;