import { useState } from 'react';
import {
    Text, TextInput, Image, SafeAreaView,
    Pressable, TouchableOpacity
} from 'react-native';
import myStyles from '../../public/stylesheets/myStyles';
import showToast from '../../utils/ShowToast';

const ForgotPasswordScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={myStyles.container}>

            <TextInput style={myStyles.textInputSetup}
                numberOfLines={1}
                maxLength={20}
                inputMode='none'
                placeholder='New Password'
                secureTextEntry
                onChangeText={(typePassword) => {
                    setPassword(typePassword);
                }} />

            <TextInput style={myStyles.textInputSetup}
                numberOfLines={1}
                maxLength={20}
                inputMode='none'
                placeholder='Confirm New Password'
                secureTextEntry
                onChangeText={(typePassword) => {
                    setConfirmPassword(typePassword);
                }} />

            <TouchableOpacity style={myStyles.buttonSetup}
                onPress={() => {
                    email === "1" && password === "1" ? [showToast("Login successful")] : showToast("Wrong email or password")
                }}>
                <Text style={myStyles.buttonTextSetup}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ForgotPasswordScreen;