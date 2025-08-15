' use client';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { CurrentWeatherApi } from '@/app/api/currentweatherapi';
// type ItemProps = {
//     item:typeForeCast;
// }


export default function UserLocation() {
  const { isLoading, showData } = CurrentWeatherApi();
  const item = showData[0];

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={100} color="gray" style={{alignContent: "center"}}/>
      ):( 
        <>
        <View style={styles.locationRow}>
          <Text style={styles.city}>Ottawa,</Text>
          <Text style={styles.province}>Ontario</Text>
        </View>
      <Image
      source={require('../../assets/images/heavey-rain.png')}
      style={styles.weatherImage}
      />
      <Text style={styles.temperature}>23&#176;</Text>
      <Text style={styles.condition}>Sunny Day</Text>
      {/* Current weather stats */}
      <View style={styles.statsRow}>
        <View style={styles.centerText}>
          <Text style={styles.statLabel}>Temperature</Text>
          <FontAwesome6
          name="temperature-low"
          size={24}
          color="black"
          style={styles.icon}
          />
          <Text>23 degrees</Text>
          {/* <Text>{item.temperature}</Text> */}
        </View>
        <View style={styles.centerText}>
          <Text style={styles.statLabel}>wind</Text>
          <Feather
            name="wind"
            size={24}
            color="black"
            style={styles.icon}
            />
          {/* <Text>{item.wind}</Text> */}
          <Text>30 west</Text>
        </View>

        <View style={styles.centerText}>
          <Text style={styles.statLabel}>Preticipation</Text>
          <MaterialCommunityIcons
            name="weather-hail"
            size={24}
            color="black"
            style={styles.icon}
            />
          {/* <Text>{item.precipitation}</Text> */}
          <Text>24 prec</Text>
        </View>
      </View>
      </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  locationRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  city: {
    fontWeight: '500',
    fontSize: 20,
  },
  province: {
    fontSize: 20,
  },
  weatherImage: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    paddingBottom: 0,
  },
  temperature: {
    fontSize: 35,
    fontWeight: '500',
    alignSelf: 'center',
  },
  condition: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  statsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 100,
  },
  statLabel: {
    fontWeight: '500',
    fontSize: 20,
  },
  icon: {
    alignSelf: 'center',
    paddingVertical: 5,
  },
  centerText: {
    alignItems: "center"
  }
});
