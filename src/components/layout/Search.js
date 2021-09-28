import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Screen</Text>
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
}
});
