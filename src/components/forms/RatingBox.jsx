import { useField } from 'formik';
import { RatingOption } from './RatingOption';
import Select from 'react-select';

export const RatingBox = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const RATING_OPTIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => ({
    value: number,
  }));

  return (
    <Select
      {...field}
      onChange={(option) => {
        helpers.setValue(
          option
            .filter(({ value }) => value !== undefined)
            .map(({ value }) => value)
        );
      }}
      value={field.value.map((value) => ({ value }))}
      placeholder="Rating"
      isSearchable={false}
      className="rating-input"
      options={RATING_OPTIONS}
      getOptionValue={({ value }) => value + ''}
      isMulti={true}
      hideSelectedOptions={false}
      controlShouldRenderValue={false}
      closeMenuOnSelect={false}
      closeMenuOnScroll={false}
      creatable={false}
      menuIsOpen={true}
      styles={{
        menu: (provided) => ({
          ...provided,
          width: '250px',
          marginLeft: '5px',
        }),
        control: (provided) => ({
          ...provided,
          width: '110px',
        }),
      }}
      components={{
        Option: RatingOption,
        ClearIndicator: null,
        IndicatorSeparator: null,
      }}
    />
  );
};
