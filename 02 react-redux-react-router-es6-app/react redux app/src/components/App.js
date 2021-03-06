import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/Home";
import AboutPage from "./about/About";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
// eslint-disable-next-line import/no-named-as-default
import ManageCourse from "./courses/ManageCourse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCourse} />
        <Route path="/course" component={ManageCourse} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={2500} hideProgressBar />
    </div>
  );
}

export default App;
