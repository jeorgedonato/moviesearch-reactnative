import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import searchApi from '../../api'
import MovieContext from '../../utils/movieContext'
import SearchResults from '../SearchResults'

const SearchBar = () => {
  const [formData, setFormData] = useState({
    title: '',
    plot: '',
    year: ''
  })

  const [results, setResults] = useState([])

  const handleSearchClick = async () => {
    const { data } = await searchApi(formData)
    data.Response === 'True' ? results.push(data) : console.log('No movie found!')
  }

  return (
    <>
      <MovieContext.Provider value={results}>
        <View style={styles.container}>
          <TextInput style={styles.text_box} placeholder='Name of Movie/Show' onChange={e => setFormData({ ...formData, title: e.target.value })} />
          <TextInput style={styles.text_box} placeholder='Year' onChange={e => setFormData({ ...formData, year: e.target.value })} />
          <Picker onValueChange={(itemValue, itemIndex) => setFormData({ ...formData, plot: itemValue })} style={styles.picker_box}>
            <Picker.Item label='Plot' value='' />
            <Picker.Item label='Movie' value='Movie' />
            <Picker.Item label='TV' value='TV' />
          </Picker>
          <Button title='Search' onPress={() => handleSearchClick()} />
          <SearchResults />
        </View>

      </MovieContext.Provider>
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
    height: 40,
    marginHorizontal: '10px',
    borderColor: 'black',
    border: 'solid',
    padding: 7,
    borderRadius: 4
  },
  picker_box: {
    width: '30',
    height: 40,
    padding: 7,
    marginHorizontal: '10px',
    borderColor: 'black',
    border: 'solid',
    borderRadius: 4
  }
})

export default SearchBar
