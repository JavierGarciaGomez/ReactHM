// 131
import React from "react";
import { Context131 } from "./ContextApp131";

export const Provider131 = ({ children }) => {
  return (
    <Context131.Provider value={"valor pasado al provider 131"}>
      {children}
    </Context131.Provider>
  );
};
