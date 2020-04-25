import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";

export const DashBoard = ({ groups }) => (
  <>
    <h2>DashBoard</h2>
    {groups.map((group) => (
      <ConnectedTaskList id={group.id} name={group.name} />
    ))}
  </>
);

function mapStateToProps(state) {
  return {
    groups: state.groups,
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(DashBoard);
