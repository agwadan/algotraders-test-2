import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {
  FetchActorNames,
  FetchDirectorNames,
  FetchMovieProductionYears,
  FetchMovieGenres,
  FetchMovieNames,
  FetchMovies
} from '../api/movie';

const Movies = () => {

  const [showMovie, setShowMovie] = useState('');
  const [movieData, setMovieData] = useState({
    actorNames: [],
    directorNames: [],
    movieNames: [],
    yearReleased: [],
    genre: []
  });

  const [searchMovie, setSearchMovie] = useState({
    movie: '',
    director: '',
    actor: '',
    year: '',
    genre: ''
  })

  useEffect(() => {
    FetchMovieNames()
      .then((data) => setMovieData({ ...movieData, movieNames: data }))
      .catch(err => {
        console.log(err);
      })
  }, [movieData])

  useEffect(() => {
    FetchActorNames()
      .then((data) => setMovieData({ ...movieData, actorNames: data }))
      .catch(err => console.log(err))
  }, [movieData])

  useEffect(() => {
    FetchDirectorNames()
      .then((data) => setMovieData({ ...movieData, directorNames: data }))
      .catch(err => console.log(err))
  }, [movieData])

  useEffect(() => {
    FetchMovieProductionYears()
      .then((data) => setMovieData({ ...movieData, yearReleased: data }))
      .catch(err => console.log(err))
  }, [movieData])

  useEffect(() => {
    FetchMovieGenres()
      .then((data) => setMovieData({ ...movieData, genre: data }))
      .catch(err => console.log(err))
  }, [movieData])

  useEffect(() => {
    FetchMovies(
      searchMovie.movie,
      searchMovie.actor,
      searchMovie.director,
      searchMovie.year,
      searchMovie.genre
    )
      .then(res => {
        setShowMovie(res)
      })
      .catch(err => console.log(err))
  })



  return (
    <div>
      <h1>Filter to get search for a movie</h1>
      <br /><br />
      <label>Actor Name</label>
      <select
        value={searchMovie.actor}
      >
        {
          movieData.actorNames.map((data, index) =>
            <option key={index}>{data.name}</option>
          )
        }
      </select>
      <br /><br />
      <label>Director Name</label>
      <select
        value={searchMovie.director}
      >
        {
          movieData.directorNames.map((data, index) =>
            <option key={index}>{data.name}</option>
          )
        }
      </select>

      <br /><br />
      <label>Movie Names</label>
      <select
        value={searchMovie.movie}
      >
        {
          movieData.movieNames.map((title, index) =>
            <option key={index}>{title}</option>
          )
        }
      </select>

      <br /><br />

      <label>Year Released</label>
      <select
        value={searchMovie.year}
      >
        {
          movieData.yearReleased.map((data, index) =>
            <option key={index}>{data}</option>
          )
        }
      </select>

      <br /><br />
      <label>Genre</label>
      <select
        value={searchMovie.genre}
      >
        {
          movieData.genre.map((data, index) =>
            <option key={index}>{data.name}</option>
          )
        }
      </select>

      <br /><br />
      <h2>Movies List</h2>

    </div>
  )
}

export default Movies;