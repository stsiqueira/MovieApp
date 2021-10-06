import React, { useState } from 'react';
import { SafeAreaView, View, FlatList} from 'react-native';
import Article from '../subcomponents/Article';
import getData from '../api/services/api';
import SelectInput from '../subcomponents/SelectInput';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../../style/Global';
import { movieItems } from '../api/services/Const';

const Stack = createNativeStackNavigator()

export default function Movie(props) {
  const [movies, setMovies] = useState([]);

  const onValueChange = async (value) => {
    const data = await getData("movie",value);
    setMovies(data.data.results);
  }
  return (
    <SafeAreaView style={globalStyles.container}>
      <SelectInput 
        onValueChange={onValueChange}
        items={movieItems}/>
      <View style={globalStyles.body}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <Article 
              image={item.poster_path} 
              title={item.original_title} 
              popularity={item.popularity} 
              releaseDate={item.release_date}
              navigation={props.navigation} 
              setShow={props.setShow}
              id={item.id}
              type='movie'/>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

