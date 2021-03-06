import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./DashBoard";
import { Route, Router } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <>
        <ConnectedNavigation />
        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />
      </>
    </Provider>
  </Router>
);
