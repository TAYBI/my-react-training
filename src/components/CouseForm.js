import React from "react";

function CourseForm({ course, onChange }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            onChange={onChange}
            name="title"
            className="form-control"
            value={course.title}
          />
        </div>
      </div>

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

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            onChange={onChange}
            name="category"
            className="form-control"
            value={course.category}
          />
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
