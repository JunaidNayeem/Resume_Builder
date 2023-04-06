import React from "react";
import "./styles/layout.less";

const layout = () => {
  return (
    <div className="main-conatiner">
      <div className="Form-conatiner">
        <form action="post">Here will be the form part</form>
      </div>
      <div className="demo-conatiner">
        <div className="resume-page">
          this will display your resume in realtime
        </div>
      </div>
    </div>
  );
};

export default layout;
