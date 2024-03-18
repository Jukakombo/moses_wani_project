import { useState } from "react";
import Footer from "../footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";

import { registerValidation } from "./registerValidation";
import axios from "axios";
import Processing from "../Processing";

function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    course: "",
    courseCode: "",
    department: "",
    level: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(registerValidation(values));
    // Check if there are any errors
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:9000/users", values)
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

      <div className="w-10/12 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div className="">
            <img src="/form.svg" alt="form" />
          </div>
          <form onSubmit={handleSubmit}>
            <h1 className="text-white font-bold uppercase text-xl">
              Registration Form
            </h1>
            <p className="text-gray-200 py-4 font-bold">
              To register, fill in your name, email, password, and confirm
              password, then click {"Register"}. After verification, access your
              new account dashboard or main page for complete access. Safeguard
              your password for account security.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Course
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Course"
                  name="course"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="courseCode"
                >
                  Course Code
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="courseCode"
                  type="text"
                  placeholder="Course Code"
                  name="courseCode"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="department"
                >
                  Department
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="department"
                  type="text"
                  placeholder="Department"
                  name="department"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="level"
                >
                  Level
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="level"
                  type="text"
                  placeholder="Level"
                  name="level"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="name"
                  placeholder="First Name"
                  name="name"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.name}</span>
              </div>
              <div className="">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.lastName}</span>
              </div>
              <div className="">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.email}</span>
              </div>
              <div className="">
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
              <div className="">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="mobile"
                >
                  Mobile
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="mobile"
                  type="text"
                  placeholder="Mobile"
                  name="mobile"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.mobile}</span>
              </div>
              <div className="">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="status"
                >
                  Status
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="status"
                  type="status"
                  placeholder="Status"
                  name="status"
                  onChange={handleChange}
                />
                <span className="text-red-600">{errors.status}</span>
              </div>
            </div>
            <div className="grid grid-cols-2   gap-4 my-4">
              <p className="text-white pb-4 text-xl">
                Have an account?{" "}
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>
              </p>
              <div className="">
                <Processing />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="button  w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;
