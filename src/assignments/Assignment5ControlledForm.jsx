import { useState } from "react";

function Assignment5ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    city: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function clearForm() {
    setFormData({
      name: "",
      email: "",
      course: "",
      city: "",
    });
  }

  return (
    <div className="assignment-container">
      <h2>Assignment 5: Controlled React Form</h2>

      <p className="assignment-description">
        Enter student information and view the entered data
        in real time.
      </p>

      <div className="controlled-form">
        <div className="input-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label>Course</label>

          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter your course"
          />
        </div>

        <div className="input-group">
          <label>City</label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />
        </div>

        <button onClick={clearForm} className="clear-button">
          Clear
        </button>
      </div>

      <div className="live-preview">
        <h3>Entered Information</h3>

        <p>
          <strong>Name:</strong>{" "}
          {formData.name || "Not entered"}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {formData.email || "Not entered"}
        </p>

        <p>
          <strong>Course:</strong>{" "}
          {formData.course || "Not entered"}
        </p>

        <p>
          <strong>City:</strong>{" "}
          {formData.city || "Not entered"}
        </p>
      </div>
    </div>
  );
}

export default Assignment5ControlledForm;