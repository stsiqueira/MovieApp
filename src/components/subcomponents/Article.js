
import React from "react";
import { Text, View, Image } from 'react-native';
import { Button } from 'native-base'
import { globalStyles } from "../../style/Global";


const Article = (props)=>{

    const base_url_img= 'https://image.tmdb.org/t/p/original/';
    const poster_path= props.image;
    const imageUri = `${base_url_img}${poster_path}`;
    
   return(
        <View style={globalStyles.articleContainer}>
            <View style={globalStyles.imageContainer}>
                <Image
                    style={globalStyles.image}
                    source={{uri: imageUri}}
                />
            </View>
            <View style={globalStyles.articleInfoContainer}>
                <Text>{props.title}</Text>
                <Text style={globalStyles.articleInfo}>Popularity: {props.popularity}</Text>
                <Text style={globalStyles.articleInfos}>Release Date: {props.releaseDate}</Text>
                    <Button
                        onPress={() =>
                            props.navigation.navigate('ShowPage', {name:props.title, id:props.id, type:props.type})
                    }> More Details
                    </Button> 
            </View>
        </View>

   ) 
}
export default Article;
