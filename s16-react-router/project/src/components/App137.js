import React from "react";
import { Link, Route, Switch } from "react-router-dom";

export const App137 = () => {
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
            <h1>Portafolio</h1>
          </Route>
        </Switch>
      </section>
    </div>
  );
};
