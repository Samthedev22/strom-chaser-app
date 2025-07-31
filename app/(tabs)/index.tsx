import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import WeekForecast from '../components/Home/weekforecast';
import UserLocation from '../components/Home/userLocation';

export default function index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          {/* Photocard import */}
          <UserLocation />
          <WeekForecast />
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