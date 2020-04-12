import React from "react";
// import { Prompt } from "react-router-dom";

export const Course = (props) => {
  return (
    <>
      <div className="jumbotron bg-dark text-white">
        <h1>Course</h1>
        <p>{props.match.params.slug}</p>
        {/* <Prompt when={true} message="Do you wanna go ?" /> */}
      </div>
    </>
  );
};
