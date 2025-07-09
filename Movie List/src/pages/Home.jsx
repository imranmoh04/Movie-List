import {useState} from 'react'
import MovieCard from '../components/MovieCard'

function Home() {
  const [searchQuery, setSearchQuery] = useState('');


    const movies = [
        {id:1, title: 'Inception', year: 2010, poster: 'https://example.com/inception.jpg'},
        {id:2, title: 'Interstellar', year: 2014, poster: 'https://example.com/interstellar.jpg'},
        {id:3, title: 'The Dark Knight', year: 2008, poster: 'https://example.com/dark-knight.jpg'},
        {id:4, title: 'Pulp Fiction', year: 1994, poster: 'https://example.com/pulp-fiction.jpg'},
    ]

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery)
    setSearchQuery("");
   }

    return (
      <div className='home'>
          <form onSubmit={handleSearch} className='search-form'>
              <input 
              type="text"
              placeholder='Search for a movie...' 
              className='search-input'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type='submit' className='search-button'>Search</button>     
            </form> 
            
            <div className='grid'>
              {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
          </div>
      </div>
    )
  }
export default Home