import { Center } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image,  TouchableOpacity} from 'react-native';


const ShowPage = (props)=>{

   return(
        <View style={styles.articleContainer}>
            <Text>SHOW PAGE SCREEN</Text>
        </View>

   ) 
}
export default ShowPage;
const styles = StyleSheet.create({
    articleContainer: {
        width:'90%',
        flexDirection:'row',
        paddingVertical:5,
        marginBottom:5,
    },

});