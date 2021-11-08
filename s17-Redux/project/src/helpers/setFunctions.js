import { types } from "../types/types";

// 157
export const setPending = () => {
  return {
    type: types.PENDING,
  };
};

export const setFullfilled = (payload) => ({ type: types.FULLFILLED, payload });
export const setError = (error) => ({
  type: types.ERROR,
  error: error.message,
});
export const setComplete = (payload) => ({ type: types.TOGGLE, payload });
//155, 157
export const setFilter = (payload) => ({ type: types.SHOW, payload });
