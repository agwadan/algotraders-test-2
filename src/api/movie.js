import axios from "axios";

const axiosURL = axios.create({
  baseURL: "https://webtest.algoadvisory.ai:5117/",
});

const FetchMovieNames = () => {
  return new Promise((resolve, reject) => {
    axiosURL
      .get("/movies/")
      .then((res) => {
        let result = res.data;
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const FetchActorNames = () => {
  return new Promise((resolve, reject) => {
    axiosURL
      .get("/actors/")
      .then((res) => {
        let result = res.data;
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const FetchDirectorNames = () => {
  return new Promise((resolve, reject) => {
    axiosURL
      .get("/directors/")
      .then((res) => {
        let result = res.data;
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const FetchMovieGenres = () => {
  return new Promise((resolve, reject) => {
    axiosURL
      .get("/genres/")
      .then((res) => {
        let result = res.data;
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const FetchMovieProductionYears = () => {
  return new Promise((resolve, reject) => {
    axiosURL
      .get("/years/")
      .then((res) => {
        let result = res.data;
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const FetchMovies = (
  movie = null,
  actor = null,
  director = null,
  year = null,
  genre = null
) => {
  const parameters = {
    movie: movie,
    actor: actor,
    director: director,
    year: year,
    genre: genre,
  };

  return new Promise((resolve, reject) => {
    axiosURL
      .get("/search/", { params: parameters })
      .then((res) => {
        let result = res.data;
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export {
  FetchMovies,
  FetchMovieNames,
  FetchMovieGenres,
  FetchActorNames,
  FetchDirectorNames,
  FetchMovieProductionYears,
};
