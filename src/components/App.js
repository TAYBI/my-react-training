import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Nav from "./common/Nav";
import CoursesPage from "./CousesPage";
import { Route, Redirect, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { Course } from "./Course";
import { CourseDetails } from "./CourseDetails";

const App = () => {
  return (
    <div className="container-fluid">
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={CourseDetails} />
        <Route path="/course" component={Course} />
        <Redirect from="/aboutus" to="about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
