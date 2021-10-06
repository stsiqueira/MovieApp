
import React, { useEffect, useState } from "react";
import { Text, View, Image } from 'react-native';
import getData from '../api/services/api';
import { globalStyles } from '../../style/Global';
import { base_url_img } from "../api/services/Const";

const ShowPage = (props)=>{
    const [show, setShow] = useState();

    useEffect(() => {
        (async () => {
            const data = await getData(props.route.params.type, props.route.params.id);
            setShow(data.data)
        })();
    }, [props.route.params])

   return(
        show ?
        <View style={globalStyles.showPageContainer}>
            <View style={globalStyles.titleContainer}>
                <Text style={globalStyles.title}>
                    {props.route.params.type == 'movie' ?
                    show.original_title
                    :show.original_name}
                </Text>
            </View>
            <View style={globalStyles.imageShowPageContainer}>
                <Image
                    style={globalStyles.image}
                    source={show.poster_path ? {uri:`${base_url_img}${show.poster_path}`} : {uri:``} }
                />
            </View>
            <View style={globalStyles.overviewContainer}>
                <Text style={globalStyles.overview}> {show.overview}</Text>
            </View>
            <View style={globalStyles.popRelContainer}>
                <Text> Popularity: {show.popularity}</Text>
                <Text>  |  Release Date: {props.route.params.type == 'movie' ? show.release_date : show.first_air_date}</Text>
            </View>
  
        </View>
        : <Text>"Loading... "</Text>
   ) 
}
export default ShowPage;


