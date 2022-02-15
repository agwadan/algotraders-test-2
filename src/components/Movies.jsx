import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FetchMovieNames } from '../api/movie';

const Movies = () => {

  const [data, setData] = useState([]);

  useEffect(async () => {
    await FetchMovieNames().then((data) => setData(data))
  }, [])

  console.log(data);
  return (
    <div>Movies

      <select>
        {
          data.map((title, index) =>
            <option key={index}>{title}</option>
          )
        }
      </select>
      <form action="">
        <input>
        </input>
      </form>
    </div>
  )
}

export default Movies;