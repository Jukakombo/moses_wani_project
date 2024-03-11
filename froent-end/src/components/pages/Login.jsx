import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../actions/user";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, navigate));
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
              <button
                type="submit"
                className="button  w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <p className="text-white py-4 text-xl">
                {"Don't"} have an account?
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
