import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "./useContext";

const Movies = () => {
  const { movies } = useAppContext();
  return (
    <>
      <section className="movie-page container">
        <div className="grid grid-4-col">
          {movies.map((movie, index) => {
            const { imdbID, Title, Year, Poster } = movie;
            const movieName = Title.substring(0, 15);
            return (
              <NavLink key={index} to={`/movie/${movie.imdbID}`}>
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {movieName.length >= 15 ? `${movieName}...` : movieName}
                    </h2>
                    <img src={Poster} alt={Title} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
