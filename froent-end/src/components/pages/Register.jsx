import React, { useState } from "react";
import Footer from "../footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { signup } from "../../actions/user";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Register() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, navigate));
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
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    firstName: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value,
                  })
                }
                required
              />
            </div>
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required
              />
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
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="button text-white w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
              <p className="text-white py-4 text-xl">
                Have an account?{" "}
                <Link to="/login" className="text-blue-600">
                  Login
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

export default Register;
