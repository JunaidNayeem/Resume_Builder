import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/user/login";
import Header from "./components/layout/header";
import Layout from "./components/layout/layout";

import "./App.less";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Layout} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
