import React from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native'
import searchApi from '../../api'
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Name of Movie/Show' />
      <TextInput placeholder='Name of Movie/Show' />
      <TextInput placeholder='Name of Movie/Show' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default SearchBar
