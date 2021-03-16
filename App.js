// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchBar from './components/SearchBar'

export default function App () {
  // const [movieInfo, setMovieInfo] = useState('')

  // const movieFunction = async () => {
  //   setMovieInfo(JSON.stringify(await apiSearch('matrix')))
  // }

  // useEffect(() => {
  //   movieFunction()
  // }, [])

  return (
    <View style={styles.container}>
      <SearchBar />
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
