import axios from 'axios'
const APIKEY = 'trilogy'
const searchApi = async (title, plot = null, year = null) => {
  try {
    const apiStr = `http://www.omdbapi.com/?apikey=${APIKEY}&t=${title}${year ? '&y=' + year : ''}${plot ? '&plot=' + plot : ''}`
    // console.log(apiStr)
    return await axios.get(apiStr)
  } catch (err) {
    throw new Error(err)
  }
}

export default searchApi
