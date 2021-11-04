// 138
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Portafolio138 } from "./Portafolio138";

export const App138 = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Route exact path="/">
            <h1>Inicio</h1>
          </Route>
          f
          <Route path="/portafolio">
            <Portafolio138 />
          </Route>
        </Switch>
      </section>
    </div>
  );
};
