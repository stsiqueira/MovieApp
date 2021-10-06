import React, { useState }from 'react';
import { SafeAreaView, View, FlatList} from 'react-native';
import Article from '../subcomponents/Article';
import getData from '../api/services/api';
import SelectInput from '../subcomponents/SelectInput';
import { globalStyles } from '../../style/Global';
import { tvItems } from '../api/services/Const';

export default function TvShow(props) {
  const [tvShows, setTvShows] = useState([]);

  const onValueChange= async (value) => {
    const data = await getData("tv",value);
    setTvShows(data.data.results);
  }
  return (
    <SafeAreaView style={globalStyles.container}>
      <SelectInput 
        onValueChange={onValueChange}
        items={tvItems}/>
      <View style={globalStyles.body}>
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

