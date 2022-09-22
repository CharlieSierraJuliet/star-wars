import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
function App() {

  const[movies,setMovies]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [error,setError]=useState(null)
 const fetchMovies=()=>{
  setIsLoading(true)
  setError(null)
  fetch('https://swapi.dev/api/films/')
  .then((response)=>{
    if(!response.ok) throw new Error("Something went wrong")
      return response.json();
    }
  )
  .then( (data)=>{
    const featuredFilms= data.results.map(element=>{
      return{
        id: element.episode_id,
        title: element.title,
        openingText: element.opening_crawl
      }
    })
    
    setMovies(featuredFilms)
  })
  .catch(error=>{
    setError(error.message)
  })
  setIsLoading(false)

 }
 

  return (
     <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
   
      <section>
      {!isLoading && movies.length>0 && <MovieList movies={movies} />}
    {!isLoading && !error && movies.length===0 && <p>No movies to display!</p>}
    {isLoading && <p>Loading...</p>}
    {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
