import { View, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import React from 'react'

export default function Camera() {
  
  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      <Text style={{alignSelf: "center", fontSize: 16}}>Capture To Get A Weather Brakedown</Text>
      <Feather name="camera" size={34} color="black" style={{alignSelf: "center"}}/>
    </View>
  )
}