import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron bg-dark text-white">
      <h1 className="my-4">Home Page</h1>
      <hr className="bg-light" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        non tenetur assumenda recusandae tempora illum sint nesciunt, natus
        molestiae reprehenderit esse saepe dolorem iste distinctio cupiditate
        praesentium, nulla impedit. Soluta explicabo cumque ab exercitationem.
        Recusandae ut hic ipsam in maxime.
      </p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
};

export default HomePage;
