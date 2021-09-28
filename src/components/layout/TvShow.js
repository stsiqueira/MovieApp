import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function TvShow() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>TV Show Screen</Text>
    </SafeAreaView>
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
