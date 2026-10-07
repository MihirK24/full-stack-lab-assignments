import { useState } from "react";

function Assignment3Validation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove the error for the field while typing
    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  }

  function validateForm() {
    const newErrors = {};

    // Name validation
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Phone number must contain exactly 10 digits.";
    }

    // Password validation
    if (formData.password === "") {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess("Registration successful!");
  }

  function clearForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    setErrors({});
    setSuccess("");
  }

  return (
    <div className="assignment-container">
      <h2>Assignment 3: JavaScript Form Validation</h2>

      <p className="assignment-description">
        User registration form with JavaScript validation for name,
        email, phone and password.
      </p>

      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          {errors.name && (
            <p className="error-message">{errors.name}</p>
          )}
        </div>

        <div className="input-group">
          <label>Email</label>

          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {errors.email && (
            <p className="error-message">{errors.email}</p>
          )}
        </div>

        <div className="input-group">
          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter 10-digit phone number"
          />

          {errors.phone && (
            <p className="error-message">{errors.phone}</p>
          )}
        </div>

        <div className="input-group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />

          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>

        <div className="button-group">
          <button type="submit">Register</button>

          <button
            type="button"
            className="clear-button"
            onClick={clearForm}
          >
            Clear
          </button>
        </div>

        {success && (
          <p className="success-message">{success}</p>
        )}
      </form>
    </div>
  );
}

export default Assignment3Validation;