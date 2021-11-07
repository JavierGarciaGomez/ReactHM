import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App({ store }) {
  const state = useSelector((state) => state);
  const [valor, setvalor] = useState(0);
  const dispatch = useDispatch();

  console.log("getstore", { store });
  // store.dispatch({ type: "aumentar" });
  return (
    <div>
      <p>Contador: {state}</p>
      <button onClick={() => dispatch({ type: "aumentar" })}>agregar</button>
      <button onClick={() => dispatch({ type: "disminuir" })}>disminuir</button>
      <button onClick={(e) => dispatch({ type: "set", payload: valor })}>
        Poner 0
      </button>
      <input
        value={valor}
        onChange={(e) => setvalor(Number(e.target.value))}
      ></input>
    </div>
  );
}

export const reducer = (state = 0, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "aumentar":
      console.log("voy a aumentar");
      return state + 1;

    case "disminuir":
      console.log("voy a disminuir");
      return state - 1;

    case "set":
      return action.payload;

    default:
      return state;
  }
};

export default App;
