import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="jumbotron bg-dark text-white">
      <h1 className="text-center">
        404
        <br />
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </h1>
    </div>
  );
};

export default PageNotFound;
