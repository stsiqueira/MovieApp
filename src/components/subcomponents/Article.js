import React from "react";
import { StyleSheet, Text, View,Image,  TouchableOpacity} from 'react-native';


const Article = (props)=>{
    // const example = `https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg`;
    // const base_url_img= 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
    // const img_size = `w500`;
    // const backdrop_path= props.image;
    const imageUri = `https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg`;

   return(
        <TouchableOpacity style={styles.articleContainer}>
            <View style={styles.imageContainer}>
     <Image
        style={styles.articleContainer}
        source={{uri: imageUri}}
      />
            </View>
            <View style={styles.articleInfoContainer}>
                <Text>{props.title}</Text>
                <Text>{props.popularity}</Text>
                <Text>{props.releaseDate}</Text>
                <TouchableOpacity>
                    <Text> More Details</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
   ) 
}
export default Article;
const styles = StyleSheet.create({
    articleContainer: {
        borderWidth:2,
        width:'100%',
        flexDirection:'row',
        paddingVertical:5,
      },
    imageContainer: {
        flexBasis:'25%',
        borderWidth:2,
    },
    articleInfoContainer:{
        paddingHorizontal:10,

    },
});