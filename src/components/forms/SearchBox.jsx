import { useField } from 'formik';
import Select from 'react-select';
import { SearchOption } from './SearchOption';
import './styles.css';
import { useContext, useRef } from 'react';
import { MovieFilterContext } from '../../contexts/MovieFilterContext';

export const SearchBox = ({ name }) => {
  const { setMovieTitleTyped, movies, moviesFilter } =
    useContext(MovieFilterContext);
  const searchRef = useRef(null);
  const [field, meta, helpers] = useField(name);

  const isFormDirty = () => {
    return Object.values(moviesFilter).some((value) => value.length > 0);
  };

  return (
    <Select
      {...field}
      onInputChange={(value, action) => {
        if (action.action === 'input-change') setMovieTitleTyped(value);
      }}
      inputValue={moviesFilter.title}
      placeholder="Enter movie name"
      className="search-input"
      options={movies}
      getOptionValue={({ title }) => title}
      isMulti={false}
      creatable={false}
      ref={searchRef}
      noOptionsMessage={() => 'No movies found'}
      menuIsOpen={
        isFormDirty() || (searchRef.current && searchRef.current.isFocused)
      }
      styles={{
        menu: (provided) => ({
          ...provided,
          padding: '20px',
        }),
      }}
      components={{
        Option: SearchOption,
        DropdownIndicator: null,
        ClearIndicator: null,
      }}
    />
  );
};
