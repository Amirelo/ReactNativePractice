import React from 'react';
import { Text, Image, SafeAreaView } from 'react-native';
import myStyle from '../../../public/stylesheets/myStyles';
import textStyle from '../../../public/stylesheets/TextStyles';
import AchievementLayout from '../../components/itemLayout/AchievementLayout';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={myStyle.container}>
            <Text style={myStyle.headerText}>Yrilin book store</Text>
            <Image style={myStyle.imageBanner}
                source={{ uri: "https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_960_720.jpg" }} />

            <Text style={textStyle.textTitle}>Trending</Text>
            <SafeAreaView style={myStyle.rowContainer}>
                <AchievementLayout
                    imagePath="https://cdn.pixabay.com/photo/2023/04/21/16/23/mongoose-7942222_960_720.jpg"
                    achievementName="Book item"/>

                <AchievementLayout
                    imagePath="https://cdn.pixabay.com/photo/2023/04/21/16/23/mongoose-7942222_960_720.jpg"
                    achievementName="Book item"/>
                <AchievementLayout
                    imagePath="https://cdn.pixabay.com/photo/2023/04/21/16/23/mongoose-7942222_960_720.jpg"
                    achievementName="Book item"/>
            </SafeAreaView>

            <Text style={textStyle.textTitle}>What you might like</Text>
            <SafeAreaView style={myStyle.rowContainer}>
                <AchievementLayout
                    imagePath="https://cdn.pixabay.com/photo/2023/04/21/16/23/mongoose-7942222_960_720.jpg"
                    achievementName="Book item"/>

                <AchievementLayout
                    imagePath="https://cdn.pixabay.com/photo/2023/04/21/16/23/mongoose-7942222_960_720.jpg"
                    achievementName="Book item"/>
                <AchievementLayout
                    imagePath="https://cdn.pixabay.com/photo/2023/04/21/16/23/mongoose-7942222_960_720.jpg"
                    achievementName="Book item"/>
            </SafeAreaView>
        </SafeAreaView>
    );
}

export default HomeScreen;