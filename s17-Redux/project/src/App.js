// 149
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { TodoItem } from "./components/TodoItem";
import {
  setError,
  setFilter,
  setFullfilled,
  setPending,
} from "./helpers/setFunctions";

import { types } from "./types/types";

// const initialState = {
//   entities: [],
//   filter: "all", // complete ||incomplete
// };

export const fetchThunk = () => async (dispatch) => {
  console.log("here");
  // 157
  dispatch(setPending());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const todos = data.slice(0, 20);
    dispatch(setFullfilled(todos));
    console.log("data", data);
  } catch (e) {
    console.log(e);
    dispatch(setError(e));
  }
};

const selectTodos = (state) => {
  const {
    todos: { todos },
    filter,
  } = state;
  console.log("aca", state);

  if (filter === "all") {
    return todos;
  }
  if (filter === "complete") {
    return todos.filter((todo) => todo.completed);
  }
  if (filter === "incomplete") {
    return todos.filter((todo) => !todo.completed);
  }
};

// 156
const selectStatus = (state) => state.todos.status;

function App({ store }) {
  const [value, setvalue] = useState("");

  const dispatch = useDispatch();
  // ..., 152
  const todos = useSelector(selectTodos);
  // 156
  const status = useSelector(selectStatus);

  // 150
  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    const id = Math.random().toString(36);
    const todo = { title: value, completed: false, id };
    dispatch({ type: types.TODOADD, payload: todo });
    setvalue("");
  };

  console.log("status", status);
  if (status.loading === types.LOADINGPENDING) {
    return <div>'Cargando'</div>;
  }

  if (status.loading === types.LOADINGREJECTED) {
    return <div>{status.error}</div>;
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input value={value} onChange={(e) => setvalue(e.target.value)} />
      </form>
      <button onClick={() => dispatch(setFilter("all"))}>Mostrar todos</button>
      <button onClick={() => dispatch(setFilter("complete"))}>
        Completados
      </button>
      <button onClick={() => dispatch(setFilter("incomplete"))}>
        Incompletos
      </button>
      {/* 154 */}
      <button
        onClick={() => {
          dispatch(fetchThunk);
        }}
      >
        Prueba middleware
      </button>
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo}></TodoItem>;
        })}
      </ul>
    </div>
  );
}

export default App;
