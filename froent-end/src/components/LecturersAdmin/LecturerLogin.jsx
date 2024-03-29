import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginValidation } from "./loginValidation";
import Footer from "../footer/Footer";
import Header from "../header/Header";
const LecturerLogin = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // handling json token
  axios.defaults.withCredentials = true;
  // handling login form
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = loginValidation(values);
    setErrors(validationErrors);
    // Check if there are no validation errors
    if (validationErrors.email === "" && validationErrors.password === "") {
      axios
        .post("http://localhost:9000/login", values)
        .then((res) => {
          if (res.data.Status === "success") {
            navigate("/lecturer-admin");
          } else {
            alert(res.data.Message);
          }
        })
        .catch((error) => {
          console.error("Error occurred during login request:", error);
        });
    }
  };

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 w-10/12 m-auto ">
        <img src="/salva.jpg" alt="login" />
        <form
          onSubmit={handleSubmit}
          className="bg-gray-300 py-4 px-4 rounded-md "
        >
          <div className="flex flex-col border p-2 rounded">
            <label htmlFor="email" className="mb-2 font-bold">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="w-full p-2 rounded-md "
              placeholder="email@example.com"
            />
            {errors.email && (
              <span className="text-red-600">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col border p-2 rounded my-2">
            <label htmlFor="password" className="mb-2 font-bold">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              className="w-full p-2 rounded-md "
              placeholder="password"
            />
            {errors.password && (
              <span className="text-red-600">{errors.password}</span>
            )}
          </div>
          <div className="flex flex-col border p-2 rounded my-2">
            <button
              type="submit"
              className="bg-blue-600 p-2 rounded text-white font-bold hover:bg-blue-700"
            >
              Login
            </button>
          </div>
          <div className="flex items-center ">
            <p>{"Don't"} have an account?</p>
            <Link className="text-blue-600 ml-2" to="/prof-portal">
              Create Account
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LecturerLogin;
