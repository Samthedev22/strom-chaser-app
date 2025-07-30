import { View, Text } from 'react-native'
import React from 'react'

export default function Camera() {
  return (
    <View style={{flex: 1, justifyContent: "center"}}>
      <Text style={{alignSelf: "center", fontSize: 30}}>camera</Text>
      <Text className='text-red-600 marker:text-2xl '>Hello</Text>
    </View>
  )
}