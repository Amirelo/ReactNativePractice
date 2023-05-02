import { useState } from 'react';
import {
    Text, TextInput, Image, SafeAreaView, StyleSheet,
    Pressable, TouchableOpacity, useWindowDimensions, ScrollView
} from 'react-native';
import myStyles from '../../../public/stylesheets/myStyles';
import showToast from '../../../utils/ShowToast';
import InputLayout from '../../components/itemLayout/InputLayout';
import CustomButton from '../../components/itemLayout/ButtonLayout';



const RegisterScreen = ({ navigation }) => {
    const { height } = useWindowDimensions();
    const [buttonPressed, isButtonPressed] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const signUpCheck = () => {
        (email != null && password != null && password === confirmPassword) ? [showToast("Register successful"), navigation.navigate("Confirm Sign Up")] : showToast("Invalid")
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

    const onLoginPress = () => {
        navigation.navigate("Login");
    }

    const onTermOfUsePress = () => {
        console.warn("Term of use");
    }

    const onPrivatePolicyPress = () => {
        console.warn("Private policy");
    }



    return (
        <SafeAreaView style={myStyles.container}>
        <ScrollView style={styles.scrollcontainer} showsVerticalScrollIndicator={false}>
        <SafeAreaView style={myStyles.container}>
            <Image style={[myStyles.imageHeader, { height: height * 0.3 }]}
                source={{ uri: "https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_960_720.png" }}
                resizeMode='stretch' />
            <Text style={myStyles.headerText}>Create an account</Text>

            <InputLayout
                placeholder={"Email"}
                inputMode={"email"}
                isSecure={false}
                value={email}
                setValue={setEmail} />

            <InputLayout
                placeholder={"Password"}
                inputMode={"none"}
                isSecure={true}
                value={password}
                setValue={setPassword} />

            <InputLayout
                placeholder={"Confirm password"}
                inputMode={"none"}
                isSecure={true}
                value={confirmPassword}
                setValue={setConfirmPassword} />

            <Text style={styles.text}>
                By registering, your confirm that you accept our
                <Text style={styles.textLink}
                    onPress={onTermOfUsePress}> Terms of Use</Text> and
                <Text style={styles.textLink}
                    onPress={onPrivatePolicyPress}> Private Policy</Text>
            </Text>

            <CustomButton
                onPress={signUpCheck}
                text={"Sign Up"} />


            <CustomButton
                onPress={loginWithFacebook}
                text={"Sign Up with Facebook"}
                bgColor={"#E7EAF4"}
                fgColor={"#4765A9"} />

            <CustomButton
                onPress={loginWithGoogle}
                text={"Sign Up with Google"}
                bgColor="#FAE9EA"
                fgColor="#DD4D44" />

            <CustomButton
                onPress={loginWithApple}
                text={"Sign Up with Apple"}
                fgColor={"#e3e3e3"}
                bgColor={"#363636"} />
            <CustomButton
                onPress={onLoginPress}
                type='TERTIARY'
                text={"Already have an account? Sign Up here"} />


        </SafeAreaView>
        </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        width: "80%",

    },
    textLink: {
        color: "#3B71F3",
        textDecorationLine: 'underline'
    },
    scrollcontainer: {
    width: '100%'
    }
})
export default RegisterScreen;