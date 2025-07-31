import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function UserLocation() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
    <View>
      <Image source={require('../../assets/images/sunny.png')} style={{alignSelf: "center", width: 200, height: 200, paddingBottom: 0 }}/>
      <Text style={{fontSize: 35, fontWeight: 500, alignSelf: "center"}}>23&#176;</Text>
    </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}