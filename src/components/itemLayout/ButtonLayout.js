import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const ButtonLayout = ({ onPress, text, type = "PRIMARY", bgColor, fgColor, direction, btnWidth }) => {
  return (
    <Pressable
      style={
        [styles.buttonSetup,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
        btnWidth ? {width: btnWidth}:{}]}

      onPress={onPress}>
      <Text 
        style={
          [styles.text, styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
          direction ? { textAlign: direction } : {}]
      }>{text}</Text>
    </Pressable>
  )
}

const styles = new StyleSheet.create({
  buttonSetup: {
    marginTop: 20,
    width: "80%",
    height: 40,
    borderRadius: 6,
    justifyContent: 'center'
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
container_SECONDARY:{
  borderColor:'#3B71F3',
  borderWidth:2,
},
  container_TERTIARY: {
    height: 20,
  },
  text: {
    textAlign: "center",
    color: 'white',
    fontSize: 20,
  },
  text_SECONDARY:{
    color:'#3B71F3',
    fontSize: 16
  },
  text_TERTIARY: {
    color: 'gray',
    fontSize: 16
  }
})

export default ButtonLayout;