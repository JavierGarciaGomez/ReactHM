import React, { createContext } from "react";
import { Contenido132 } from "./Contenido132";
import { Provider132 } from "./Provider132";

export const Context132 = createContext({ valor: false, toggle: () => {} });
export const ContextApp132 = () => {
  return (
    <Provider132>
      <Contenido132></Contenido132>
    </Provider132>
  );
};
