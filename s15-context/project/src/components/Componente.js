// 132
import React, { useContext } from "react";
import { Context132 } from "./ContextApp";

export const Componente = () => {
  const { valor } = useContext(Context132);
  console.log(valor);
  return (
    <div>
      <label>{valor.toString()}</label>
    </div>
  );
};
