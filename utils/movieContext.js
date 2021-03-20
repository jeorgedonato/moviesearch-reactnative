import { createContext } from 'react'

const MovieContext = createContext({
  title: '',
  year: '',
  plot: '',
  searchResult: [],
  handleInputChange: () => {},
  handleSearch: () => {}
})

export default MovieContext
