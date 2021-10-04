import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShowPage from './src/components/layout/ShowPage';
import Section from './src/components/layout/Section';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
        <NativeBaseProvider>
          <NavigationContainer>
            <StatusBar style="light"/>
            <Stack.Navigator>
              <Stack.Screen name="Section" component={Section}
                options={{
                    title:"Movies App",
                    headerStyle: { backgroundColor: '#2c3e50'},
                    headerTitleStyle:{color: '#fff'}
                  }}/>

              <Stack.Screen name="ShowPage" component={ShowPage}
                // options={({route})=>({ headerBackTitle: 'Back to List' })}/>
                options={({route}) =>({headerBackTitle: 'Back to List', headerTitle:route.params.name})}/>
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
  );
}
export default App;