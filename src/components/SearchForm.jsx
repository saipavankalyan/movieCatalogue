import { useContext } from 'react';
import { MovieFilterContext } from '../contexts/MovieFilterContext';
import { Form, Formik } from 'formik';
import { SearchBox } from './forms/SearchBox';
import { RatingBox } from './forms/RatingBox';
import { GenreBox } from './forms/GenreBox';
import { FormObserver } from './FormObserver';

const INITIAL_FILTERS = {
  title: '',
  rating: [],
  genre: [],
};

export const SearchForm = () => {
  const { setMoviesFilter, moviesFilter } = useContext(MovieFilterContext);
  return (
    <Formik
      initialValues={INITIAL_FILTERS}
      onSubmit={(values) => {
        setMoviesFilter({ ...values, title: moviesFilter.title });
      }}
    >
      <Form className="form">
        <SearchBox isMenuOpen={true} name="title" id="title" />
        <RatingBox name={'rating'} id={'rating'} />
        <GenreBox name={'genre'} id={'genre'} />
        <FormObserver />
      </Form>
    </Formik>
  );
};
