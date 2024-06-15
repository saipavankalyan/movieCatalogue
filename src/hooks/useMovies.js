import { useEffect, useState } from 'react';
import MOVIES from '../data/MOVIES.json';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [moviesFilter, setMoviesFilter] = useState({
    title: '',
    rating: [],
    genre: [],
  });

  useEffect(() => {
    setMovies(MOVIES);
  }, []);

  useEffect(() => {
    const filteredMovies = MOVIES.map(
      ({ Title: title, Rating: rating, Category: genre }) => ({
        title,
        rating,
        genre,
      })
    ).filter((movie) => {
      const titleMatch = movie.title
        .toLowerCase()
        .includes(moviesFilter.title.toLowerCase());
      const ratingMatch =
        moviesFilter.rating.length === 0 ||
        moviesFilter.rating.includes(0) ||
        moviesFilter.rating.includes(parseInt(Math.round(movie.rating)));
      const genreMatch =
        moviesFilter.genre.length === 0 ||
        moviesFilter.genre.includes(movie.genre);

      return titleMatch && ratingMatch && genreMatch;
    });

    setMovies(filteredMovies);
  }, [moviesFilter]);

  return { movies, moviesFilter, setMoviesFilter };
};

export default useMovies;
