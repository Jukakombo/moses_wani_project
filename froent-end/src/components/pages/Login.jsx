import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginValidation } from "./loginValidation";

function Login() {
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
        .post("http://localhost:9000/login-user", values)
        .then((res) => {
          if (res.data.Status === "success") {
            navigate("/admin-dashboard");
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
      <div className="w-10/12 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          <div className="">
            <img src="/juba_univ.jpg" alt="form" />
          </div>
          <form onSubmit={handleSubmit}>
            <h1 className="text-white font-bold uppercase text-xl">
              Login Form
            </h1>
            <p className="text-gray-200 py-4 font-bold">
              To log in, enter your email and password, then click{"Login"}.
              Upon authentication, access your account dashboard or main page
              for full functionality. Keep your password secure and private for
              account safety.
            </p>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <span className="text-red-600">{errors.email}</span>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <span className="text-red-600">{errors.password}</span>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="button  w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <p className="text-white py-4 text-xl">
                {"Don't"} have an account?{" "}
                <Link to="/register" className="text-blue-600">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
