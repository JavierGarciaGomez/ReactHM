// 132
import React, { useContext } from "react";
import { Context132 } from "./ContextApp132";

export const Contenido132 = () => {
  const { valor, toggle } = useContext(Context132);

  return (
    <div>
      <div>{valor.toString()}</div>
      <button onClick={toggle}>Cambiar Valor</button>
    </div>
  );
};
