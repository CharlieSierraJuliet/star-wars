import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
function App() {

  const[movies,setMovies]=useState([])

 const fetchMovies=()=>{
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

  })
 }
 

  return (
     <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <MovieList movies={movies} />
      <section>
      </section>
    </React.Fragment>
  );
}

export default App;
