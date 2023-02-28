import './App.css'
import { useState, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'



function App() {
  const [sort, setSort] = useState(false)

  const { search, setSearch, errorSearch } = useSearch()
  const { movies, getMovies, loading, error } = useMovies({ search, sort })
  
  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  ) 
  
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <form onSubmit={handleSubmit} className='form'>
          <input 
           style={{
            border: '1px solid transparent',
            borderColor: errorSearch ? 'red' : 'transparent'
           }}
           onChange={handleChange} value={search}  type="text" placeholder='Avengers, Star Wars ...' />
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
        {errorSearch && <p style={{ color: 'red' }}>{errorSearch}</p>}
      </header>

      <main>
        {loading && <p>Loading...</p>}
        <Movies movies={movies}/>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </main>
    </div>
  )
}

export default App
