// 146
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

const store = createStore((state = { cosa: 2 }, action) => {
  // la función createStore recibe como argumento una función que se llama reducer porque se parece al useredicer
  // action = {type: 'tipo de acción', payload: 'any'}

  switch (action.type) {
    case "accion": {
      console.log("case accion", action.payload);

      return action.payload;
    }
    // 147
    case "increment": {
      return state + 1;
    }

    case "decrement": {
      return state - 1;
    }

    default:
      return state;
  }
  console.log("state and action priting form argument of createStore", {
    state,
    action,
  });
  return state;
});

console.log("store", { store });
console.log("store.getState", store.getState());
// con dispatch se ejecuta el método de createstore
console.log("dispatch");
store.dispatch({ type: "cosa", payload: 3 });
const dispatchAccion = store.dispatch({ type: "accion", payload: 3 });
console.log("dispatch Accion", dispatchAccion);
console.log("", store.getState());

// 147

store.dispatch({ type: "increment" });
console.log("dispatch increment", store.getState());
store.dispatch({ type: "decrement" });
console.log("dispatch decrement", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
