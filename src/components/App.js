import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Nav from "./common/Nav";

const App = () => {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Nav />
      {getPage()}
    </div>
  );
};

export default App;
