import { useState } from "react";

// 75
export const useForm = (initialValue) => {
  console.log("here");
  const [form, setform] = useState(initialValue);

  const onChangeHandler = (e) => {
    setform((previousState) => ({
      ...previousState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
    console.log(form);
  };

  const resetForm = () => {
    setform(initialValue);
  };

  return [form, onChangeHandler, resetForm];
};
