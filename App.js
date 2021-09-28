import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Movie from './src/components/layout/Movie'
import Search from './src/components/layout/Search'
import TV from './src/components/layout/TvShow'
import Header from './src/components/layout/Header';


const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style="light"/>
        <Header/>
        <Tab.Navigator>
            <Tab.Screen name="Movie" component={Movie} />
            <Tab.Screen name="Search Results" component={Search} />
            <Tab.Screen name="TV Shows" component={TV} />
        </Tab.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
