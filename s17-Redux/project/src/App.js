// 149
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { TodoItem } from "./components/TodoItem";
import { types } from "./types/types";

// const initialState = {
//   entities: [],
//   filter: "all", // complete ||incomplete
// };

// 153
export const todosReducer = (stateEntities = [], action) => {
  switch (action.type) {
    case types.TODOADD:
      return stateEntities.concat({ ...action.payload });

    case types.TOGGLE:
      const newTodos = stateEntities.map((todo) => {
        if (todo.id === action.payload.id) {
          // todo.completed = true;
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      return newTodos;

    default:
      return stateEntities;
  }
};
export const filterReducer = (stateFilter = "all", action) => {
  switch (action.type) {
    case types.SHOW:
      return action.payload;

    default:
      return stateFilter;
  }
};

// 153
// export const reducer = (state = initialState, action) => {
//   return {
//     entities: todosReducer(state.entities, action),
//     filter: filterReducer(state.filter, action),
//   };
// };

// 153. Combine reducers
export const reducer = combineReducers({
  entities: todosReducer,
  filter: filterReducer,
});

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.TODOADD:
//       return {
//         ...state,
//         entities: state.entities.concat({ ...action.payload }),
//       };

//     case types.TOGGLE:
//       const newTodos = state.entities.map((todo) => {
//         if (todo.id === action.payload.id) {
//           // todo.completed = true;
//           return { ...todo, completed: !todo.completed };
//         } else {
//           return todo;
//         }
//       });
//       return {
//         ...state,
//         entities: newTodos,
//       };

//     case types.SHOW:
//       return {
//         ...state,
//         filter: action.payload,
//       };

//     default:
//       return state;
//   }
// };

const selectTodos = (state) => {
  const { entities, filter } = state;

  if (filter === "all") {
    return entities;
  }
  if (filter === "complete") {
    return entities.filter((todo) => todo.completed);
  }
  if (filter === "incomplete") {
    return entities.filter((todo) => !todo.completed);
  }
};

function App({ store }) {
  const [value, setvalue] = useState("");

  const dispatch = useDispatch();
  // ..., 152
  const todos = useSelector(selectTodos);

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

  return (
    <div>
      <form onSubmit={submit}>
        <input value={value} onChange={(e) => setvalue(e.target.value)} />
      </form>
      <button onClick={() => dispatch({ type: types.SHOW, payload: "all" })}>
        Mostrar todos
      </button>
      <button
        onClick={() => dispatch({ type: types.SHOW, payload: "complete" })}
      >
        Completados
      </button>
      <button
        onClick={() => dispatch({ type: types.SHOW, payload: "incomplete" })}
      >
        Incompletos
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
