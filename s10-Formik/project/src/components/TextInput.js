// 92

import { useField } from "formik";
import React from "react";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("field, meta", { field, meta });

  return (
    <div>
      <label>{label}</label>
      <input {...field}></input>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};
