
import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'native-base'


const Article = (props)=>{

    const base_url_img= 'https://image.tmdb.org/t/p/original/';
    const poster_path= props.image;
    const imageUri = `${base_url_img}${poster_path}`;
    
   return(
        <View style={styles.articleContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{uri: imageUri}}
                />
            </View>
            <View style={styles.articleInfoContainer}>
                <Text>{props.title}</Text>
                <Text style={styles.articleInfo}>Popularity: {props.popularity}</Text>
                <Text style={styles.articleInfos}>Release Date: {props.releaseDate}</Text>
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
const styles = StyleSheet.create({
    articleContainer: {
        width:'90%',
        flexDirection:'row',
        paddingVertical:5,
        marginBottom:5,
    },
    imageContainer: {
        flexBasis:90,
        height:100,
    },
    articleInfoContainer:{
        paddingHorizontal:10,
        flex:1

    },
    articleInfo:{
        paddingVertical:2
    },
    image:{
        flex:1,
        resizeMode:'cover',
    },

    
});