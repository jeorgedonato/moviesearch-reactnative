import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import apiSearch from './api'
const { useState, useEffect } = React
export default function App () {
  const [movieInfo, setMovieInfo] = useState('')

  useEffect(async () => {
    const movieFunction = async () => {
      setMovieInfo(JSON.stringify(await apiSearch('matrix')))
    }

    movieFunction()
  }, [])

  return (
    <View style={styles.container}>
      <Text>{movieInfo}</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
