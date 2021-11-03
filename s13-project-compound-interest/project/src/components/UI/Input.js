// 116
import React from "react";

import { useField } from "formik";
import { Control } from "./Control";
import { Label } from "./Label";
import { MyInput } from "./MyInput";
import { ErrorMessage } from "./ErrorMessage";

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Control>
      <Label>{label}</Label>
      <MyInput {...field} {...props} />
      {meta.touchd && meta.error && <ErrorMessage />}
    </Control>
  );
};
