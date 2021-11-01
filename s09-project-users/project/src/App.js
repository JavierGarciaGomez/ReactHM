// 75
import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import { useForm } from "./hooks/useForm";

import { Card } from "./Components/UI/Card";
import { Container } from "./Components/UI/Container";

import { UserForm } from "./Components/UI/UserForm";

function App() {
  const submitHandler = (user) => {
    setusers([...users, user]);
  };

  const [users, setusers] = useState([]);

  console.log("USERS", users);
  return (
    <div>
      <h1>Section 09 Project</h1>
      <div style={{ marginTop: "15%" }}>
        <Container>
          <Card>
            <div className="padding-form">
              <UserForm submit={submitHandler} />
            </div>
          </Card>
          <Card>
            <ul>
              {users.map((user) => {
                return (
                  <li
                    key={Math.random()}
                  >{`${user.name} ${user.lastname} ${user.email}`}</li>
                );
              })}
            </ul>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default App;
