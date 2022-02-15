import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {
  FetchActorNames,
  FetchDirectorNames,
  FetchMovieProductionYears,
  FetchMovieGenres,
  FetchMovieNames
} from '../api/movie';

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



  return (
    <div>Movies

      <label>Actor Name</label>
      <select>
        {
          movieData.actorNames.map((data, index) =>
            <option key={index}>{data.name}</option>
          )
        }
      </select>

      <label>Director Name</label>
      <select>
        {
          movieData.directorNames.map((data, index) =>
            <option key={index}>{data.name}</option>
          )
        }
      </select>

      <label>Movie Names</label>
      <select>
        {
          movieData.movieNames.map((title, index) =>
            <option key={index}>{title}</option>
          )
        }
      </select>

      <label>Year Released</label>
      <select>
        {
          movieData.yearReleased.map((data, index) =>
            <option key={index}>{data}</option>
          )
        }
      </select>

      <label>Genre</label>
      <select>
        {
          movieData.genre.map((data, index) =>
            <option key={index}>{data.name}</option>
          )
        }
      </select>
    </div>
  )
}

export default Movies;