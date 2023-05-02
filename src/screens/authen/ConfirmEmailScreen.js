import { useState } from 'react';
import {
    Text, TextInput, Image, SafeAreaView,View, StyleSheet,
    Pressable, TouchableOpacity
} from 'react-native';
import myStyles from '../../../public/stylesheets/myStyles';
import InputLayout from '../../components/itemLayout/InputLayout';
import CustomButton from '../../components/itemLayout/ButtonLayout';

const verificationCheck= () => {
    console.warn("Confirm check")
}

const onResendCodePress = () => {
    console.warn("Resend code");
}

const onBackToSignInPress = () => {
    confirm.warn("Back to sign in");
    navigation.navgiate("Login");
}

const ConfirmEmailScreen = ({navigation}) => {
    const [code, setCode] = useState();
    const [username,setUsername] = useState();
    return (
        <SafeAreaView style={myStyles.container}>
            <Text style={myStyles.headerText}>Confirm Sign Up</Text>
            <InputLayout
                placeholder={"Username*"}
                inputMode={"none"}
                value={username}
                onChangeText={setUsername}/>
            
            <InputLayout
                placeholder={"Confirmation code*"}
                inputMode={"numeric"}
                value={code}
                onChangeText={setCode}/>

            <CustomButton
            text={"Confirm"}/>
            <View style={myStyles.rowContainer}>
            <CustomButton style={styles.myButton}
                text={"Resend code"}
                type='TERTIARY'
                btnWidth={"34%"}/>
            <CustomButton style={styles.myButton}
                text={"Back to Sign In"}
                type='TERTIARY'
                btnWidth={"34%"}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    myButton:{
        backgroundColor:'blue'
    }
})

export default ConfirmEmailScreen