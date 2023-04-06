import React from "react";
import Header from "./header";
import "./styles/layout.less";

const layout = ({ children }) => {
  return (
    <div className="main-conatiner">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default layout;
