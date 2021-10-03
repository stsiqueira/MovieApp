import React, { useState }from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';




const SearchArea = (props)=>{
    const [text, onChangeText] = useState("")
    return (
        <View style={styles.searchAreaContainer}>
          <View style={styles.childContainer}>
            <Text>Search Movie/TV Show name</Text>
            <TextInput 
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="useless placeholder"/>
          </View>
          <View style={styles.childContainer}>
            <Text>Choose search type</Text>
            <View style={styles.searchButtonContainer}>
              <View style={styles.select}>
                <RNPickerSelect 
                  style={customPickerStyles}
                  placeholder={{label: 'Choose an option', value: 'top_rated'}}
                  onValueChange={async (value) => {
                    const data = await getData("movie",value);
                    setMovies(data);
                  }}
                  items={[
                      { label: 'Top rated', value: 'top_rated' },
                      { label: 'Upcoming', value: 'upcoming' },
                      { label: 'Popular', value: 'popular' },
                      { label: 'Now Playing', value: 'now_playing' }
                  ]}/>
              </View>
              <Button title="Search" style={styles.button}/>
            </View>
          </View>
        </View>
    )
}
export default SearchArea;

const styles = StyleSheet.create({
    searchAreaContainer:{
      paddingVertical:10,
      width:'80%',
    },
    childContainer:{
      paddingVertical:5
    },
    input:{
      marginVertical:5,
      borderWidth:1
    },
    searchButtonContainer:{
      flexDirection:'row',
    },
    select:{
      flex:1,
    },
    button:{

    }
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