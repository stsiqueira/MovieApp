import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchArea from '../subcomponents/SearchArea';
import Article from '../subcomponents/Article';
import getData from '../api/services/api';
export default function Search(props) {

  const [search, setSearch] = useState();

  const onSubmit = async (select, text) => {
    const data = await getData("search",select, text,);
    setSearch(data.data.results);
  }
  return (
    <View style={styles.container}>
      <SearchArea onSubmit={onSubmit}/>
      <View style={styles.body}>
      <FlatList
          data={search}
          renderItem={({ item }) => (
            <Article 
              image={item.poster_path} 
              title={item.original_title ? item.original_title : item.original_name} 
              popularity={item.popularity} 
              releaseDate={item.release_date}
              navigation={props.navigation}
              id={item.id}
              type={item.original_title ? 'movie' : 'tv'} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
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
