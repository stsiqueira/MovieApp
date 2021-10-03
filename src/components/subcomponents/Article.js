import { Center } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image,  TouchableOpacity} from 'react-native';


const Article = (props)=>{
    // const example = `https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg`;
    // const base_url_img= 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
    // const img_size = `w500`;
    // const backdrop_path= props.image;
    const imageUri = `https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg`;

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
                <TouchableOpacity style={styles.button}>
                    <Text style={{textAlign:'center'}}> More Details</Text>
                </TouchableOpacity>
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
        resizeMode:'contain',
    
    },
    button:{
        borderWidth:2,
        flex:1,
        // backgroundColor:'#222f3e',
        justifyContent:'center',
        marginTop:5,
        borderRadius:6,

    },
    
});