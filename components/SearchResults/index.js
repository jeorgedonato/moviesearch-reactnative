import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MovieContext from '../../utils/movieContext'
const SearchResults = () => {
  const results = useContext(MovieContext)
  console.log(results)
  return (
    <>
      {results.length > 0
        ? results.map(({ title }, index) => {
            return (
            // <View key={index}>
              <Text key={index}>
                {title}
              </Text>
            // </View>
            )
          })
        : <View><Text>No movie found!</Text></View>}
    </>
  )
}

export default SearchResults
