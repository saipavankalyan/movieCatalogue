import { useFormikContext } from 'formik';
import { useEffect } from 'react';

export const FormObserver = () => {
  const { values, submitForm } = useFormikContext();

  useEffect(() => {
    submitForm();
  }, [values]);
};
