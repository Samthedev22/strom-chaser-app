import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import WeekForecast from '../components/Home/weekforecast';
import UserLocation from '../components/Home/userLocation';
import Search from '../components/Home/search';

export default function index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          {/* Search */}
          <Search />
          {/* Photocard import */}
          <UserLocation />
          {/* <WeekForecast /> */}
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
    justifyContent: "center",
    padding: 10
  }
})