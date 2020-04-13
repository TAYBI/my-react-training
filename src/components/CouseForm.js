import React from "react";
import { TextInput } from "./common/TextInput";

function CourseForm({ course, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="title"
        type="text"
        label="Title"
        onChange={onChange}
        name="title"
        value={course.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={onChange}
            value={course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <TextInput
        type="text"
        id="category"
        label="Category"
        onChange={onChange}
        name="category"
        value={course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
