import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
    Text, TextInput, View, Image, Button, SafeAreaView,
    ScrollView, FlatList, SectionList, Pressable, TouchableOpacity,
    ToastAndroid, ImageBackground
} from 'react-native';
import myStyles from '../public/stylesheets/myStyles';
import showToast from '../utils/ShowToast';


const RegisterScreen = ({ navigation }) => {
    const [buttonPressed, isButtonPressed] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    return (
        <SafeAreaView style={myStyles.container}>
            <Text style={myStyles.headerText}>My Book Store</Text>
            <Image style={myStyles.imageHeader}
                source={require('../public/images/namesake.jpg')}
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

            <TextInput style={myStyles.textInputSetup}
                numberOfLines={1}
                maxLength={20}
                inputMode='none'
                placeholder='Confirm Password'
                secureTextEntry
                onChangeText={(typePassword) => {
                    setConfirmPassword(typePassword);
                }} />


            <TouchableOpacity style={myStyles.buttonSetup}
                onPress={() => {
                    (email!='' && password!='' && password === confirmPassword) ? showToast("Register successful") : showToast("Invalid")
                }}>
                <Text style={myStyles.buttonTextSetup}>Login</Text>
            </TouchableOpacity>

            <Pressable style={myStyles.buttonBottom}
            onPress={()=>{
                navigation.navigate("Login");
            }}><Text>Already have an account? Sign in here</Text></Pressable>
        </SafeAreaView>
    );

}
export default RegisterScreen;