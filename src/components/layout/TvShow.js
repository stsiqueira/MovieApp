import React, { useState }from 'react';
import { StyleSheet, SafeAreaView, View, FlatList} from 'react-native';
import Article from '../subcomponents/Article';
import getData from '../api/services/api';
import SelectInput from '../subcomponents/SelectInput';

export default function TvShow(props) {
  const [tvShows, setTvShows] = useState([]);
  const items=[
    { label: 'airing today', value: 'airing_today' },
    { label: 'on the air', value: 'on_the_air' },
    { label: 'popular', value: 'popular' },
    { label: 'top_rated', value: 'top_rated' }
  ]
  const onValueChange= async (value) => {
    const data = await getData("tv",value);
    setTvShows(data.data.results);
  }
  return (
    <SafeAreaView style={styles.container}>
      <SelectInput 
        onValueChange={onValueChange}
        items={items}/>
      <View style={styles.body}>
      <FlatList
        data={tvShows}
        renderItem={({ item }) => (
          <Article 
            image={item.poster_path} 
            title={item.name} 
            popularity={item.popularity} 
            releaseDate={item.first_air_date} 
            navigation={props.navigation}
            id={item.id}
            type='tv'/>
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
  body:{
    flex:1,
    width:'100%',
    paddingHorizontal:10,
    paddingVertical:15,
  },
});
