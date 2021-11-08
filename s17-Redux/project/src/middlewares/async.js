// 157
// 154
export const asyncMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  console.log("middleware prints", store, next, action);
  return next(action);
};
