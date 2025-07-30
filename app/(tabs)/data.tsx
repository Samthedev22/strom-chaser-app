import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


export default function location() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeContainer}>
          <View style={{flex: 1, justifyContent: "center", }}>
            <Text style={{alignSelf: "center", fontSize: 20}}>Data</Text>
          </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1
    }
})