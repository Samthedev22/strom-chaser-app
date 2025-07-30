import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <Text className='text-center self-center'>Storm Chaser App</Text>
          <Text style={{alignSelf: "center", fontSize: 25}}>Storm Chaser App</Text>
        </View>


      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    
  },
  container:{
    flex: 1,
    // display: "flex",
    // alignContent: "center",
    justifyContent: "center"

  }
})