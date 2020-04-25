import React from "react";
import { connect } from "react-redux";

export const TaskList = ({ tasks, name }) => (
  <>
    <h3>{name}</h3>
    {tasks.map((task) => (
      <div>{task.name}</div>
    ))}
  </>
);

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  return {
    name: ownProps.name,
    id,
    tasks: state.tasks.filter((task) => task.group === id),
  };
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);
