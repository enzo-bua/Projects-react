
const API_KEY = '4287ad07'

export const searchMovies = async ({ search }) => {
  if (search === '') return  //si no escribe no hago el fetch
  
  try{
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const data = await response.json()

    const movies = data.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error(error)
  }
}