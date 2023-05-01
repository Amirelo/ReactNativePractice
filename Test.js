import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, SafeAreaView, ScrollView, FlatList, SectionList } from 'react-native';


const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  const [peting, setPeting] = useState(0);


  return (
    <View>
      <Text>My name is: {props.name} and I am {isHungry ? "hungry" : "full, thank you!"}</Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Please feed me >n< !' : 'Tasty~'}
      />

      <Button
        onPress={() => {
          peting < 10 ? setPeting(peting + 1) : (setPeting(0), setIsHungry(true));


        }}
        disabled={isHungry}
        title={isHungry ? "Don't touch me !" : 'rrr...'} />
      <Text>{peting}</Text>
    </View>
  );


}
const getMoviesFromApi = () => {
  return fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .then(json => {
      return json.movies;
    })
    .catch(error => {
      console.error(error);
    });
};

export default function App() {
  const [buttonText, setButtonText] = useState("Button");
  const [fetchData, setFetchData] = useState("https://mywebsite.com/mydata.json");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Text>This is Yrilin App</Text>

      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
        style={{ width: 200, height: 200 }} />

      <Cat name="Henry" />


      <Button
        onPress={() => {
          let myText = "Hi there bud";
          myText = myText.split(' ').map(word => word && "🍕").join(" ");
          setButtonText(myText);
        }}
        title={buttonText}
      />

        <Text></Text>

      <FlatList data={[
        { key: "Eric" },
        { key: "Vari" },
        { key: "Erio" },
        { key: "Qiord" },
      ]} 
      renderItem={({item}) => <Text>{item.key}</Text>} />

      <SectionList
      sections={[
        {title: "D", data:["Deric", "Dioda", "Dion","Dominic","Dominion", "Dios", "Dodo"]},
        {title: "J", data:["Jeon", "Jiu", "Jes"]},
      ]}
      renderItem={({item}) => <Text>{item}</Text>}
      renderSectionHeader={({section})=>(
        <Text>{section.title}</Text>
      )}
      keyExtractor={item=>`basicListEntry-${item}`}
      />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
