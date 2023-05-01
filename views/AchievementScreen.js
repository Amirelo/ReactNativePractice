import React from 'react'
import {Text, View, Image, SafeAreaView} from  'react-native'
import myStyle from '../public/stylesheets/myStyles'
import AchievementLayout from '../itemLayout/AchievementLayout';

const AchievementScreen = ({navigation}) =>{
    return (
        <SafeAreaView style ={myStyle.rowContainer}>
            <AchievementLayout 
            imagePath= "https://cdn.pixabay.com/photo/2023/03/30/18/27/animal-7888465_960_720.jpg" 
            achievementName="Sth"/>
            <AchievementLayout 
            imagePath= "https://cdn.pixabay.com/photo/2023/03/30/18/27/animal-7888465_960_720.jpg" 
            achievementName="Sth"/>
            <AchievementLayout 
            imagePath= "https://cdn.pixabay.com/photo/2023/03/30/18/27/animal-7888465_960_720.jpg" 
            achievementName="Sth"/>
            <AchievementLayout 
            imagePath= "https://cdn.pixabay.com/photo/2023/03/30/18/27/animal-7888465_960_720.jpg" 
            achievementName="Sth"/>
            <AchievementLayout 
            imagePath= "https://cdn.pixabay.com/photo/2023/03/30/18/27/animal-7888465_960_720.jpg" 
            achievementName="Sth"/>
            <AchievementLayout 
            imagePath= "https://cdn.pixabay.com/photo/2023/03/30/18/27/animal-7888465_960_720.jpg" 
            achievementName="Sth"/>
        </SafeAreaView>
    );
}

export default AchievementScreen;