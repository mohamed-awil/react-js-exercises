import { useState } from "react";

export const useForm = (initialValues) => {

  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return { values, handleChange };
};
