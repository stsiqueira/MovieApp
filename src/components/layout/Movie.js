import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, FlatList} from 'react-native';
import Article from '../subcomponents/Article';
import getData from '../api/services/api';
import SelectInput from '../subcomponents/SelectInput';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function Movie(props) {
  const [movies, setMovies] = useState([]);
  const items = [
    { label: 'Top rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Popular', value: 'popular' },
    { label: 'Now Playing', value: 'now_playing' }
];
  const onValueChange = async (value) => {
    const data = await getData("movie",value);
    setMovies(data);
  }
  return (
    <SafeAreaView style={styles.container}>
      <SelectInput 
        onValueChange={onValueChange}
        items={items}/>
      <View style={styles.body}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <Article 
              image={item.poster_path} 
              title={item.original_title} 
              popularity={item.popularity} 
              releaseDate={item.release_date}
              navigation={props.navigation} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    color:'#222f3e',
    fontSize:20,
    textAlign: 'center',
    paddingBottom:10
  },
  body:{
    flex:1,
    width:'100%',
    paddingHorizontal:10,
    paddingVertical:15,
  },
});
{/*  */}