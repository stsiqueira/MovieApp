import React, { useState }from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Article from '../subcomponents/Article';
import getData from '../api/services/api';
import SelectInput from '../subcomponents/SelectInput';

export default function Movie() {
  const [tvShows, setTvShows] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {/* <SelectInput /> */}
        <View style={styles.searchContainer}>
          <RNPickerSelect
            style={customPickerStyles}
            placeholder={{label: 'Choose an option', value: 'top_rated'}}
            onValueChange={async (value) => {
              const data = await getData("tv",value);
              setTvShows(data);
            }}
            items={[
                { label: 'airing today', value: 'airing_today' },
                { label: 'on the air', value: 'on_the_air' },
                { label: 'popular', value: 'popular' },
                { label: 'top_rated', value: 'top_rated' }
            ]}
          />
        </View>
      <View style={styles.body}>
      <FlatList
        data={tvShows}
        renderItem={({ item }) => (
          <Article 
            image={item.backdrop_path} 
            title={item.name} 
            popularity={item.popularity} 
            releaseDate={item.first_air_date} />
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