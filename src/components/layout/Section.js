import React from "react";
import { StyleSheet } from 'react-native';
import Movie from './Movie'
import Search from './Search'
import TV from './TvShow'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Section = (props)=>{

   return(
        <Tab.Navigator>
            <Tab.Screen name="Movie" component={Movie} />
            <Tab.Screen name="Search Results" component={Search} />
            <Tab.Screen name="TV Shows" component={TV} />
        </Tab.Navigator> 
   ) 
}
export default Section;
const styles = StyleSheet.create({

});