// 76
import React from "react";

export const Input = ({ label, ...rest }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...rest}></input>
    </div>
  );
};
