import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
function App() {

  const[movies,setMovies]=useState([])
  const [isLoading,setIsLoading]=useState(false)
 const fetchMovies=()=>{
  setIsLoading(true)
  fetch('https://swapi.dev/api/films/')
  .then((response)=>{
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
    setIsLoading(false)
  })
 }
 

  return (
     <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
   
      <section>
      {!isLoading && movies.length>0 && <MovieList movies={movies} />}
    {!isLoading && movies.length===0 && <p>No movies to display!</p>}
    {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
