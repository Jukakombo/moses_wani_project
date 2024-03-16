import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { registerValidation } from "./registerValidation";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const LecturerRegister = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(registerValidation(values));
    // Check if there are any errors
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:9000/signup", values)
        .then((res) => {
          navigate("/login");
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 w-10/12 m-auto">
        <img src="/signup.svg" alt="login" />
        <form onSubmit={handleSubmit} className="bg-gray-300 py-4 px-4 rounded-md  ">
          <div className="flex flex-col border p-2 rounded">
            <label htmlFor="name" className="mb-2 font-bold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-2 rounded-md "
              placeholder="Name"
              onChange={handleChange}
            />
            {errors.name && <span className="text-red-600">{errors.name}</span>}
          </div>

          <div className="flex flex-col border p-2 rounded mt-2">
            <label htmlFor="email" className="mb-2 font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 rounded-md "
              placeholder="email@example.com"
              onChange={handleChange}
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
              type="password"
              name="password"
              id="password"
              className="w-full p-2 rounded-md "
              onChange={handleChange}
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
              Create Account
            </button>
          </div>
          <div className="flex items-center ">
            <p>{"Don't"} have an account?</p>
            <Link className="text-blue-600 ml-2" to="/prof-login-portal">
            Login
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default LecturerRegister;
