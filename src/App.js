import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/user/login";
import Header from "./components/layout/header";
import Home from "./components/layout/home";

import "./App.less";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
