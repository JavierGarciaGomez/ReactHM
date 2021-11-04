// 131
import React, { useContext } from "react";
import {} from "../App";
import { Context131B } from "./ContextApp131";

export const Contenido2 = () => {
  const context = useContext(Context131B);

  return <div>{context}</div>;
};
