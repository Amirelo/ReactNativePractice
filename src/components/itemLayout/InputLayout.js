import { View, Text,TextInput, StyleSheet } from 'react-native'
import React from 'react'

const InputLayout = ({value, setValue, placeholder, inputMode, isSecure, removeMarginTop}) => {
  return (
    <TextInput 
        style={
          [styles.textInputSetup,
            removeMarginTop ? {marginTop: 0}:{}]}
        numberOfLines={1}
        maxLength={20}
        inputMode={inputMode}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        value={value}
        onChangeText={setValue} />
  )
}

const styles = StyleSheet.create({
  textInputSetup:{
    width:"80%",
    height: 40,
    borderWidth:1,
    borderRadius:6,
    paddingStart: 22,
    fontSize:20,
    marginTop:20
},
})

export default InputLayout