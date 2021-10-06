import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Movie from './Movie'
import Search from './Search'
import TV from './TvShow'
const Tab = createMaterialTopTabNavigator();

const Section = (props)=>{

   return(
        <Tab.Navigator screenOptions={{
                tabBarLabelStyle: { textTransform: "none", fontSize: 12 },
                tabBarActiveTintColor: '#2c3e50',
                tabBarIndicatorStyle: {
                    borderBottomWidth: 2,
                    borderBottomColor: '#2c3e50'
                },
        }} >
            <Tab.Screen name="Movies" component={Movie} />
            <Tab.Screen name="Search Results" component={Search} />
            <Tab.Screen name="TV Shows" component={TV} />
        </Tab.Navigator> 
   ) 
}
export default Section;
