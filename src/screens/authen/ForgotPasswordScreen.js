import { useState } from 'react';
import {
    Text, TextInput, Image, SafeAreaView, StyleSheet,
    Pressable, TouchableOpacity
} from 'react-native';
import myStyles from '../../../public/stylesheets/myStyles';
import InputLayout from '../../components/itemLayout/InputLayout';
import ButtonLayout from '../../components/itemLayout/ButtonLayout';

const ForgotPasswordScreen = ({ navigation }) => {
    const [username, setUsername] = useState();

    const sendEmailCheck = () => {
        console.warn("Send email");
        navigation.navigate("Reset password")
    }

    const onBackToSignInPress = () => {
        console.warn("Back to sign in");
        navigation.navigate("Login");
    }
    return (
        <SafeAreaView style={myStyles.container}>
            <Text style={myStyles.headerText}>Reset your password</Text>
            

            <Text style={styles.inputTextHeader}>Username *</Text>
            <InputLayout
            placeholder={"Username"}
            value={username}
            onChangeText={setUsername}
            removeMarginTop={true}/>

            <ButtonLayout
            text={"SEND"}
            onPress={sendEmailCheck}/>

            <ButtonLayout
            text={"Back to Sign In"}
            type={"TERTIARY"}
            onPress={onBackToSignInPress}/>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputTextHeader:{
        textAlign:'left',
        width: '80%',
        fontSize: 20
    }
})

export default ForgotPasswordScreen;