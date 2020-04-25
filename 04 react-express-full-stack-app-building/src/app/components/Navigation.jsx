import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export const Navigation = () => (
  <div>
    <Link to="/dashboard">
      <h2>Dashboard</h2>
    </Link>
  </div>
);

export const ConnectedNavigation = connect((state) => state)(Navigation);
