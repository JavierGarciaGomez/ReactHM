// 131
import React, { useState } from "react";
import { Context132 } from "./ContextApp132";

export const Provider132 = ({ children }) => {
  const [valor, setvalor] = useState(false);
  const value = {
    valor,
    toggle: () => setvalor(!valor),
  };

  return <Context132.Provider value={value}>{children}</Context132.Provider>;
};
