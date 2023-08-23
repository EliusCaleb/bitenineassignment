import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const registerUser = async (userData) => {
  try {
    const { name, email, password } = userData;

    if (!name || !email || !password) {
      throw new Error("Name, email, and password are required");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("User registration data:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    console.log("User registered successfully.");
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    if (formData.password !== formData.password_confirmation) {
      errors.password_confirmation = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      try {
        await registerUser(formData);
        navigate("/");
      } catch (error) {
        console.error("Registration error:", error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div>
        <Link to="/">
          <img src="/assets/img/logo.png" alt="/" />
          <h3 className="text-4xl font-bold text-purple-600">bitnine</h3>
        </Link>
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                formErrors.name ? "border-red-500" : ""
              }`}
            />
            {formErrors.name && (
              <p className="text-red-500">{formErrors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                formErrors.email ? "border-red-500" : ""
              }`}
            />
            {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                formErrors.password ? "border-red-500" : ""
              }`}
            />
            {formErrors.password && (
              <p className="text-red-500">{formErrors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              className={`block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                formErrors.password_confirmation ? "border-red-500" : ""
              }`}
            />
            {formErrors.password_confirmation && (
              <p className="text-red-500">{formErrors.password_confirmation}</p>
            )}
          </div>
          <div className="flex items-center justify-end mt-4">
            <Link
              to="/login"
              className="text-sm text-gray-600 underline hover:text-gray-900"
            >
              Already registered?
            </Link>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-blue-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
