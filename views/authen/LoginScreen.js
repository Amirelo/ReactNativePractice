import {useState } from 'react';
import {
  Text, TextInput, Image, SafeAreaView,Pressable, TouchableOpacity,} from 'react-native';
import myStyles from '../../public/stylesheets/myStyles';
import showToast from '../../utils/ShowToast';


const LoginScreen = ({ navigation }) => {
  const [buttonPressed, isButtonPressed] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <SafeAreaView style={myStyles.container}>
      <Text style={myStyles.headerText}>My Book Store</Text>
      <Image style={myStyles.imageHeader}
        source={require('../../public/images/placeholder.png')}
        resizeMode='contain' />
      <TextInput style={myStyles.textInputSetup}
        numberOfLines={1}
        inputMode='email'
        placeholder='Email'
        onChangeText={(typeEmail) => {
          setEmail(typeEmail);
        }} />

      <TextInput style={myStyles.textInputSetup}
        numberOfLines={1}
        maxLength={20}
        inputMode='none'
        placeholder='Password'
        secureTextEntry
        onChangeText={(typePassword) => {
          setPassword(typePassword);
        }} />

      <Pressable style={myStyles.buttonRight}
      onPress={() =>{
        navigation.navigate("Verification")
      }}><Text>Forgot password</Text></Pressable>

      <TouchableOpacity style={myStyles.buttonSetup}
        onPress={() => {
          email === "a" && password === "a" ? [showToast("Login successful")] : showToast("Wrong email or password")
        }}>
        <Text style={myStyles.buttonTextSetup}>Login</Text>
      </TouchableOpacity>

      <Pressable style={myStyles.buttonBottom}
        onPress={() => {
          navigation.navigate("Register")
        }}><Text>Don't have an account? Sign up here</Text></Pressable>
    </SafeAreaView>
  );

}
export default LoginScreen;