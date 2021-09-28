import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const Article = ()=>{
   return(
        <TouchableOpacity style={styles.articleContainer}>
            <View style={styles.imageContainer}>
                <Text>IMG</Text>
            </View>
            <View style={styles.articleInfoContainer}>
                <Text>Title</Text>
                <Text>Popularity</Text>
                <Text>Release Date</Text>
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