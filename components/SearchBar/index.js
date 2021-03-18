import React from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import searchApi from '../../api'
const SearchBar = () => {
  return (
    <>
      <View style={styles.container}>
        <TextInput style={styles.text_box} placeholder='Name of Movie/Show' />
        <TextInput style={styles.text_box} placeholder='Year' />
        <Picker>
          <Picker.Item label='Movie' value='Movie' />
          <Picker.Item label='TV' value='TV' />
        </Picker>
        <Button title='Search' />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    display: 'flex',
    height: '50',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text_box: {
    width: '30',
    height: '30px',
    marginHorizontal: '10px',
    // borderWidth: '2px',
    padding: 5,
    borderRadius: 5
  }
})

export default SearchBar
