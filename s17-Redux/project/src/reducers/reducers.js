// 157

import { combineReducers } from "redux";
import { setError, setFullfilled, setPending } from "../helpers/setFunctions";
import { types } from "../types/types";

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

    case types.FULLFILLED:
      return action.payload;

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

// 156
const initialFetching = {
  // idle, pending, succeeded, rejected
  loading: types.LOADINNGIDLE,
  error: null,
};
// 156
export const fetchingReducer = (state = initialFetching, action) => {
  switch (action.type) {
    case types.PENDING:
      return { ...state, loading: types.LOADINGPENDING };

    case types.FULLFILLED:
      return { ...state, loading: types.LOADINGSUCCEEDED };

    case types.ERROR:
      return { ...state, loading: types.LOADINGREJECTED };

    default:
      return state;
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
  // ..., 156
  todos: combineReducers({
    todos: todosReducer,
    status: fetchingReducer,
  }),
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
