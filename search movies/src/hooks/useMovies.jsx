import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../service/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search) //para que no haga la misma busqueda dos veces


  const getMovies = useMemo(() =>{
    return async ({ search }) => {
      if (search === previousSearch.current) return 
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        

        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally { //se ecuja si o si, desp de cualq de los dos ant
        setLoading(false)
      }
    }
  }, [search]) 


  const sortedMovies = useMemo(() => {
    return sort 
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])



  //en movies las peliculas y en getMovies una froma de recuperar las pelic
  return { movies: sortedMovies, getMovies, loading, error }

}