import React from "react";
import { TextInput } from "./common/TextInput";
import { SelectInput } from "./common/SelectInput";

function CourseForm({ course, onChange, onSubmit, errors }) {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="title"
        type="text"
        label="Title"
        onChange={onChange}
        name="title"
        error={errors.title}
        value={course.title}
      />

      <SelectInput
        id="author"
        name="authorId"
        label="Author"
        error={errors.authorId}
        onChange={onChange}
        value={course.authorId + "" || ""}
        className="form-control"
      />

      <TextInput
        type="text"
        id="category"
        label="Category"
        onChange={onChange}
        name="category"
        error={errors.category}
        value={course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
