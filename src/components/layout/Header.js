import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Movies App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222f3e',
    width:'100%',

  },
  header:{
      color:'#c8d6e5',
      fontSize:20,
      textAlign: 'center',
      paddingBottom:10
  }
});
