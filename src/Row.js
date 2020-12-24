import React, { useState, useEffect } from "react";
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ tittle, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //a snippet of code which runs based on specific condition

  useEffect(() => {
    //if its empty [], run once and dont run again

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //https://api.themoviedb.org/3/

      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>You added this {tittle}</h2>
      <div className="row__posters">

        {/*Several Row posters */}

        {movies.map((movie) => (
          //"image url extension.png"
          <img 
          className="row__poster"
          src={`${base_url}${movie.poster_path}`} alt={movie.name} />
        ))}

      </div>
    </div>
  );
}

export default Row;
