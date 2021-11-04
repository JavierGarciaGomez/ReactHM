// 131
import React, { createContext } from "react";
import { Contenido } from "./Contenido";
import { Contenido2 } from "./Contenido2";
import { Provider131 } from "./Provider131";

export const Context131 = createContext("default value context 131");
export const Context131B = createContext("default value context 131, valor b");

export const ContextApp131 = () => {
  return (
    <Provider131>
      <Contenido></Contenido>
      <Contenido2></Contenido2>
    </Provider131>
  );
};
