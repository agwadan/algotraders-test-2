import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FetchMovieNames } from '../api/movie';

const Movies = () => {

  const [movieData, setMovieData] = useState({
    actorNames: [],
    directorNames: [],
    movieNames: [],
    yearReleased: [],
    genre: []
  });

  useEffect(() => {
    FetchMovieNames()
      .then((data) => setMovieData({ ...movieData, movieNames: data }))
      .catch(err => {
        console.log(err);
      })
  }, [movieData])

  return (
    <div>Movies

      <label>Actor Name</label>

      <label>Director Name</label>

      <label>Movie Names</label>
      <select>
        {
          movieData.movieNames.map((title, index) =>
            <option key={index}>{title}</option>
          )
        }
      </select>

      <label>Year Released</label>

      <label>Genre</label>


    </div>
  )
}

export default Movies;