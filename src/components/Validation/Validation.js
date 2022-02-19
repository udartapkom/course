// Данный компонент требует доработки (блочит форму)

import { useState } from 'react';

export const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValidForm, setIsValidForm] = useState(false);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });

console.log(name.value);

    setIsValidForm(target.closest('form').checkValidity());
  };

  const resetForm = (
    newValues = {},
    newErrors = {},
    newIsValidForm = false
  ) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValidForm(newIsValidForm);
  };

  return { values, errors, isValidForm, handleInputChange, resetForm };
};
export default useFormWithValidation;
