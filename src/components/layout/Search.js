import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchArea from '../subcomponents/SearchArea';

export default function Search() {
  return (
    <View style={styles.container}>
      <SearchArea />
      <View style={styles.body}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
header:{
  color:'#222f3e',
  fontSize:20,
  textAlign: 'center',
  paddingBottom:10
},
body:{
  flex:1,
  width:'100%',
  paddingHorizontal:10,
  paddingVertical:15,
},
});
