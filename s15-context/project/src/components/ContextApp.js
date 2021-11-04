// 132
import React, { createContext, useState } from "react";
import { Componente } from "./Componente";

export const Context132 = createContext({ value: false, toggle: () => {} });

const Provider = ({ children }) => {
  const [valor, setvalor] = useState(false);
  const value = {
    valor,
    toggle: () => setvalor(!valor),
  };
  return <Context132.Provider value={value}>{children}</Context132.Provider>;
};

export const ContextApp = () => {
  return (
    <div>
      <h2>131 en adelante</h2>
      <Provider>
        <Componente></Componente>
      </Provider>
    </div>
  );
};
