import React, { useEffect, useReducer, useRef, useState } from "react";

// 59 Custom hook
const useCounter = (inicial) => {
  const [counter, setcounter] = useState(inicial);
  const increment = () => {
    setcounter((previous) => previous + 1);
  };
  return [counter, increment];
};

// const App = () => {
//   const [counter, increment] = useCounter(0);
//   return (
//     <div>
//       Contador: {counter}
//       <button onClick={increment}>Incrementar</button>
//     </div>
//   );
// };

// 60, 61 useEffect
const Interval = ({ counter }) => {
  useEffect(() => {
    // const i = setInterval(() => console.log("counter interval", counter), 100);
  }, [counter]);
  return <p>Intervalo</p>;
};
const App = () => {
  const [counter, increment] = useCounter(0);
  useEffect(() => {
    console.log("im an effect");
  }, [counter]);
  return (
    <div>
      Contador: {counter}
      <button onClick={increment}>Incrementar</button>
      <Interval counter={counter}></Interval>
      <UseReducerApp />
      <UseRefApp />
    </div>
  );
};

// 63 use effect

const initialState = { counter: 0 };

// state = {contador: 0}
// action = {type: 'incrementar', payload: any}
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return { counter: state.counter + 1 };

    case "decrementar":
      return { counter: state.counter - 1 };

    case "set":
      return { counter: action.payload };

    default:
      return state;
  }
};

const UseReducerApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addHandler = () => {
    console.log("here");
    dispatch({ type: "incrementar" });
    console.log(state);
  };
  return (
    <div>
      <h2>Use Reducer App</h2>
      <p>{state.counter}</p>
      <button onClick={addHandler}>Incrementar</button>
      <button onClick={() => dispatch({ type: "decrementar" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "set", payload: 0 })}>
        Set 0
      </button>
    </div>
  );
};

// 64
const UseRefApp = () => {
  const ref = useRef();

  return (
    <div>
      <h2>Use Ref App</h2>
      <div onClick={() => console.log(ref.current)} ref={ref}>
        A use ref text
      </div>
    </div>
  );
};

export default App;
