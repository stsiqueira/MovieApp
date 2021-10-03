import React, { useState }from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';




const SelectInput = (props)=>{

    return (
        <View style={styles.searchContainer}>
          <RNPickerSelect
            style={customPickerStyles}
            placeholder={{label: 'Choose an option', value: 'top_rated'}}
            onValueChange={async (value) => {
              const data = await getData("movie",value);
              setMovies(data);
              console.log("movies->", movies)
            }}
            items={[
                { label: 'Top rated', value: 'top_rated' },
                { label: 'Upcoming', value: 'upcoming' },
                { label: 'Popular', value: 'popular' },
                { label: 'Now Playing', value: 'now_playing' }
            ]}
          />
        </View>
    )
}
export default SelectInput;

const styles = StyleSheet.create({
    searchContainer:{
      paddingVertical:30,
      width:'70%'
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