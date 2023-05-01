import {useState } from 'react';
import {Text, TextInput, Image, SafeAreaView,Pressable, TouchableOpacity,} from 'react-native';
import myStyles from '../../public/stylesheets/myStyles';
import showToast from '../../utils/ShowToast';

const ProfileScreen = () =>{
    return(
        <SafeAreaView style={myStyles.container}>
            <Text>Username</Text>
        </SafeAreaView>
    );
}

export default ProfileScreen;