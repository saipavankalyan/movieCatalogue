import { createContext, useEffect } from 'react';
import useMovies from '../hooks/useMovies';

const MovieFilterContext = createContext();

const MovieFilterProvider = ({ children }) => {
  const { movies, moviesFilter, setMoviesFilter } = useMovies();
  const setMovieTitleTyped = (value) => {
    setMoviesFilter({ ...moviesFilter, title: value });
  };

  useEffect(() => {}, [moviesFilter]);

  return (
    <MovieFilterContext.Provider
      value={{ movies, setMoviesFilter, moviesFilter, setMovieTitleTyped }}
    >
      {children}
    </MovieFilterContext.Provider>
  );
};

export { MovieFilterProvider, MovieFilterContext };
