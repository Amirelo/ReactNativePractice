import { useState } from 'react';
import {
    Text, TextInput, Image, SafeAreaView,
    Pressable, TouchableOpacity
} from 'react-native';
import myStyles from '../../public/stylesheets/myStyles';
import showToast from '../../utils/ShowToast';

const VerificationScreen = () => {
    return (
        <SafeAreaView style={myStyles.container}>
            <Text>Type in your email address</Text>
            <Text>a verification code will be sent to your email</Text>
            <TextInput style={myStyles.textInputSetup}
                placeholder='Email'
                inputMode='email' />

            <TouchableOpacity style={myStyles.buttonSetup}
                onPress={() => {
                }}>
                <Text style={myStyles.buttonTextSetup}>Send</Text>
            </TouchableOpacity>
{/* --------------------------------------------------- */}

            <TextInput style={myStyles.textInputSetup}
                placeholder='Email'
                inputMode='email' />

            <TouchableOpacity style={myStyles.buttonSetup}
                onPress={() => {
                }}>
                <Text style={myStyles.buttonTextSetup}>Verify</Text>
            </TouchableOpacity>

            
            
        </SafeAreaView>
    );
}

export default VerificationScreen;