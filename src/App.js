import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/user/login";
import Header from "./components/layout/header";
import Layout from "./components/layout/layout";

import "./App.less";

function App() {
  return (
    <>
      <Route path="./components/user/login" component={Login} />
      <Header />
      <Layout />
    </>
  );
}

export default App;
