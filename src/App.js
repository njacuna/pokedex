import React from "react";
import Home from "./components/home";
import "./App.css";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import GetPokeDetails from "./components/getPokeDetails";
import NavBar from "./components/navBar";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon/:id" component={GetPokeDetails} />
      </Switch>
    </div>
  );
}

export default App;
