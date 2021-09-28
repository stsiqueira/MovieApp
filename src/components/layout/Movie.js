import React from 'react';
import axios from 'axios'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Article from '../subcomponents/Article';

export default function Movie() {
  const getData = async data => {
    console.log("===========")
    const apiKey = '88ea48b6af174e7e71d3fb1c98bb76f0'
    const url = `https://api.themoviedb.org/3/movie/${data}?api_key=${apiKey}&language=en-US&page=1`
    //const url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    const response = await axios.get(url)
    // console.log(response)
    const list = response.data;
    // console.log(list)

    // console.log(list.results);
    list.results.forEach(movie => {
      console.log("********")
      console.log(movie.original_title);
      console.log(movie.popularity);
      console.log(movie.release_date);
      console.log(movie.overview);
    });

    return 
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <RNPickerSelect
            style={customPickerStyles}
            placeholder={{ label: 'Top rated', value: 'top_rated' }}
            onValueChange={(value) => {
              getData(value)
            }}
            items={[
                { label: 'Upcoming', value: 'upcoming' },
                { label: 'Popular', value: 'popular' },
                { label: 'Now Playing', value: 'now_playing' },
            ]}
          />
        </View>
      <View style={styles.body}>
        <Article />
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
  searchContainer:{
    paddingVertical:30,
    width:'70%'
  },
  select:{
    borderColor:'black',
    borderWidth:2,
  },
  body:{
    flex:1,
    width:'100%',
    paddingHorizontal:10,
    paddingVertical:15,
  },
});
const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width:'100%',
    borderWidth: 1,
    borderColor: '#222f3e',
    borderRadius: 8,
    color: '#222f3e',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#222f3e',
    borderRadius: 8,
    color: '#222f3e',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});