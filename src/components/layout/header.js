import React from "react";
import { Link } from "react-router-dom";

import "./styles/header.less";

const header = () => {
  return (
    <div className="header-conatiner">
      Resume Builder
      <p>
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default header;
