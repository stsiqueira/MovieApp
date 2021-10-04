import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text,  FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { NativeBaseProvider } from 'native-base'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShowPage from './src/components/layout/ShowPage';
import Section from './src/components/layout/Section';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Section" component={Section}/>
              <Stack.Screen name="ShowPage" component={ShowPage}/>
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
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
   // <NativeBaseProvider>
    //   <NavigationContainer>
  //   <View>
  //   <Text>TESTE</Text>
  // </View>

  {/* <StatusBar style="light"/>
  <Stack.Navigator>
    <Stack.Screen name="Section" component={Section}/>
    <Stack.Screen name="ShowPage" component={ShowPage}/>
  </Stack.Navigator> */}

//   </NavigationContainer>
// </NativeBaseProvider>