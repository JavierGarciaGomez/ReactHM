// 150
import React from "react";
import { useDispatch } from "react-redux";
import { types } from "../types/types";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => dispatch({ type: types.TOGGLE, payload: todo })}
    >
      {todo.title}
    </li>
  );
};
