
import { Center } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import getData from '../api/services/api';

const ShowPage = (props)=>{
    const base_url_img= 'https://image.tmdb.org/t/p/original';
    const [show, setShow] = useState();

    useEffect(() => {
        (async () => {
            const data = await getData(props.route.params.type, props.route.params.id);
            setShow(data.data)
        })();
    }, [props.route.params])

   return(
        show ?
        <View style={styles.showPageContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {props.route.params.type == 'movie' ?
                    show.original_title
                    :show.original_name}
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={show.poster_path ? {uri:`${base_url_img}${show.poster_path}`} : {uri:``} }
                />
            </View>
            <View style={styles.overviewContainer}>
                <Text style={styles.overview}> {show.overview}</Text>
            </View>
            <View style={styles.popRelContainer}>
                <Text> Popularity: {show.popularity}</Text>
                <Text>  |  Release Date: {props.route.params.type == 'movie' ? show.release_date : show.first_air_date}</Text>
            </View>
  
        </View>
        : <Text>" "</Text>
   ) 
}
export default ShowPage;
const styles = StyleSheet.create({
    showPageContainer: {
        width:'90%',
        alignItems: 'center',
        alignSelf: 'center',
        flex:1,
    },
    titleContainer:{
        paddingVertical:30,
    },
    title:{
        fontSize:25
    },
    imageContainer:{
        flex:1,
        width:"80%",
        maxHeight:450
    },
    image:{
        flex:1,
        resizeMode:'cover',

    },
    overviewContainer:{
        width:"80%",
        paddingVertical:30,
        
    },
    overview:{
        textAlign: "justify"
    },
    popRelContainer:{
        flexDirection: 'row',
        paddingVertical:10,
    },
});