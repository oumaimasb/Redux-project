import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
