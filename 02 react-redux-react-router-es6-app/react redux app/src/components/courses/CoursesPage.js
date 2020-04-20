import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          value={this.state.course.title}
          onChange={this.handleChange}
        />{" "}
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
