import { useField } from 'formik';
import Select from 'react-select';
import MOVIES from '../../data/MOVIES.json';
import { GenreOptions } from './GenreOption';
import _ from 'lodash';

export const GenreBox = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const GENRE_OPTIONS = _.uniqBy(MOVIES, 'Category').map(
    ({ Category: genre }) => ({ genre })
  );

  return (
    <Select
      {...field}
      onChange={(option) => {
        helpers.setValue(
          option.filter(({ genre }) => genre).map(({ genre }) => genre)
        );
      }}
      value={field.value.map((genre) => ({ genre }))}
      placeholder="Genre"
      isSearchable={false}
      className="genre-input"
      options={GENRE_OPTIONS}
      getOptionValue={({ genre }) => genre}
      isMulti={true}
      hideSelectedOptions={false}
      controlShouldRenderValue={false}
      closeMenuOnSelect={false}
      creatable={false}
      styles={{
        container: (provided) => ({
          ...provided,
          width: '130px',
        }),
        control: (provided) => ({
          ...provided,
          width: '110px',
        }),
      }}
      components={{
        Option: GenreOptions,
        ClearIndicator: null,
        IndicatorSeparator: null,
      }}
    />
  );
};
