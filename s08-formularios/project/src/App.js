// 65
import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

// 65 uncontrolled forms components
function App() {
  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data));
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <span>Texto random</span>
          <input name="field" />
          <input name="field2" />
          <input type="submit" value="send" />
        </div>
      </form>
      <UncontrolledForms />
      <ControlledForm></ControlledForm>
    </div>
  );
}

// 66 uncontrolled components
const UncontrolledForms = () => {
  const input = useRef();
  const file = useRef();
  const submit = () => {
    console.log(input.current.value);
    console.log(file.current.files[0]);
    const form = new FormData();
    form.append("file", file.current.files[0]);
    form.append("field", input.current.value);
    fetch("/lala", { method: "POST", body: form });
  };

  return (
    <div>
      <div>
        <div>
          <h2>Uncontrolled Form</h2>
          <span></span>
          <input type="text" name="field" ref={input}></input>
          <input type="file" name="file" ref={file}></input>
        </div>
        <input type="submit" value="send" onClick={submit}></input>
      </div>
    </div>
  );
};

// 69 controlled components
// 70 sincronizando varios valores
const ControlledForm = () => {
  const [field, setfield] = useState({
    field: "caca",
    textarea: "sasa",
    checkbox: false,
  });

  const onChangeHandler = (e) => {
    setfield((previousState) => ({
      ...previousState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
    console.log(field);
  };

  const onSubmitHandler = () => {};

  return (
    <div>
      <div>
        <h2>Controlled Form</h2>
        <div>
          <input
            type="text"
            name="field"
            value={field.field}
            onChange={onChangeHandler}
          ></input>
          <textarea
            name="textarea"
            value={field.textarea}
            onChange={onChangeHandler}
          />
          <select value={field.select} name="select" onChange={onChangeHandler}>
            <option value="">Select one</option>
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
          </select>
          <input
            type="checkbox"
            name="checkbox"
            onChange={onChangeHandler}
            checked={field.checkbox}
          ></input>
        </div>
        <div onChange={onChangeHandler}>
          <label>Radiobutton</label>
          <input type="radio" value="radio1" />
          radio1
          <input type="radio" value="radio2" />
          radio2
          <input type="radio" value="radio3" />
          radio3
        </div>
        <input type="submit" value="send" onClick={onSubmitHandler}></input>
      </div>
    </div>
  );
};

export default App;
