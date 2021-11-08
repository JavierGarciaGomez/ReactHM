// 150
import React from "react";
import { useDispatch } from "react-redux";
import { setComplete } from "../helpers/setFunctions";

import { types } from "../types/types";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => dispatch(setComplete(todo))}
    >
      {todo.title}
    </li>
  );
};
