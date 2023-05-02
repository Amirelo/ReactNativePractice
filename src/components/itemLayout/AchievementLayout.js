import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import myStyle from "../../../public/stylesheets/myStyles";

const AchievementLayout = props =>{
    return(
        <View style={myStyle.itemContainer}>
            <Image style={myStyle.itemImage}
            source={{uri:props.imagePath}}
            resizeMode="stretch"/>
            <Text style = {myStyle.itemText}>{props.achievementName}</Text>
        </View>
    );
}

export default AchievementLayout;