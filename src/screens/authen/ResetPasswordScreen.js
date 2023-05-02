import { useState } from 'react';
import {
    Text, TextInput, Image, SafeAreaView, StyleSheet,
    Pressable, TouchableOpacity
} from 'react-native';
import myStyles from '../../../public/stylesheets/myStyles';
import InputLayout from '../../components/itemLayout/InputLayout';
import ButtonLayout from '../../components/itemLayout/ButtonLayout';

const ResetPasswordScreen = ({navigation}) => {
    const [code, setCode] = useState();
    const [password, setPassword] = useState();

    const submitCheck = () => {
        console.warn("Submit check");
    }
    const onBackToSignInPress = () => {
        console.warn("Back to sign in");
        navigation.navigate("Login");
    }
  return (
    
    <SafeAreaView style={myStyles.container}>
            <Text style={myStyles.headerText}>Reset your password</Text>
            

            <Text style={styles.inputTextHeader}>Confirmation Code *</Text>
            <InputLayout
            placeholder={"Code"}
            value={code}
            inputMode={"numeric"}
            onChangeText={setCode}
            removeMarginTop={true}/>

            <Text style={styles.inputTextHeader}>Password *</Text>
            <InputLayout
            placeholder={"password"}
            value={code}
            inputMode={"none"}
            onChangeText={setPassword}
            isSecure={true}
            removeMarginTop={true}/>

            <ButtonLayout
                text={"Submit"}
                onPress={submitCheck}/>

            <ButtonLayout
                text={"Back to Sign In"}
                type = "TERTIARY"
                onPress={onBackToSignInPress}/>

           

        </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    inputTextHeader:{
        textAlign:'left',
        width: '80%',
        fontSize: 20
    }
})

export default ResetPasswordScreen