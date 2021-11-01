// 83

import React from "react";
import { useForm } from "../../hooks/useForm";
import { Button } from "./Button";
import { Input } from "./Input";

export const UserForm = ({ submit }) => {
  const initialForm = {
    name: "",
    lastname: "",
    email: "",
  };

  const [form, onChangeHandler, reset] = useForm(initialForm);

  const submitHandler = (e) => {
    e.preventDefault();
    submit(form);
    reset();
  };

  return (
    <form onSubmit={submitHandler}>
      {/* <Input
          field={"name"}
          value={form.name}
          onChangeHandler={onChangeHandler}
        /> */}
      <Input
        label={"Name"}
        name={"name"}
        placeholder={"Name"}
        value={form.name}
        onChange={onChangeHandler}
      />
      <Input
        label={"Last Name"}
        name={"lastname"}
        placeholder={"Last Name"}
        value={form.lastname}
        onChange={onChangeHandler}
      />
      <Input
        label={"E-mail"}
        name={"email"}
        placeholder={"E-mail"}
        value={form.email}
        onChange={onChangeHandler}
      />
      <Button>Send</Button>
    </form>
  );
};
