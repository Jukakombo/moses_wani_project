/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { IoIosCreate } from "react-icons/io";
import { FaIdCard } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    // jwt for manual
    setUser(JSON.parse(localStorage.getItem("profile")));
    // Assuming you have a proper way to check if the user is authenticated or not
    const isAuthenticated = user?.result?.name;
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [user, navigate, setUser]);
  return (
    <>
      {/* <Navigation /> */}
      <div className="bg-[#2C3E50] py-24 h-full flex flex-col justify-between">
        <div className="flex justify-between w-11/12 m-auto items-between text-white">
          <h1 className="font-bold text-2xl">
            Hi <span className="text-[#fd4fb8]">{user?.result?.name}</span>,
            QR-Code Generator!
          </h1>
          <div
            className="flex items-center rounded-md admin_btn p-2"
            onClick={() => dispatch(logout)}
          >
            <button className=" text-white rounded">Logout</button>
            &nbsp;
            <TbLogout className="cursor-pointer" size={30} />
          </div>
        </div>
        <div className="flex  justify-between   w-11/12 m-auto py-8 ">
          <div className="bg-[#16405c] border-2 border-white flex-[30%] flex-col justify-between p-4">
            {/* certificates */}
            <Link to="students">
              <div className="p-2 admin_hover bg-[#2d2b42] m-4 text-white rounded cursor-pointer flex items-center">
                <FaIdCard className="text-white" size={30} />
                <p className="ml-4"> Students ID Cards</p>
              </div>
            </Link>
            {/* create certificate */}

            <Link to="create-student">
              <div className="functions">
                <div className="p-2 admin_hover bg-[#2d2b42] m-4   text-white rounded cursor-pointer flex items-center">
                  <IoIosCreate size={30} />
                  <p className="ml-4">Create Student Id Card</p>
                </div>
              </div>
            </Link>

            {/* delete certificate */}
            <Link to="delete-student-id-card">
              <div className="functions">
                <div className="p-2 bg-red-700  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                  <MdOutlineDelete size={30} />
                  <p className="ml-4">Delete Student Id Card</p>{" "}
                </div>
              </div>
              {/* inbox */}
              <Link to="contact-list">
                <div className="functions ">
                  <div className="p-2 admin_hover bg-[#2d2b42] m-4 text-white rounded cursor-pointer flex items-center">
                    <IoMailUnread size={30} />
                    <p className="ml-4"> Contacts</p>
                  </div>
                </div>
              </Link>
            </Link>
            {/* Send request to Noah*/}

            {/* <Link to="send-request-noah">
              <div className="functions ">
                <div className="p-2 admin_hover bg-[#2d2b42] m-4 text-white rounded cursor-pointer">
                  Notify Noah Dujé
                  <IoMail size={30} />
                </div>
              </div>
            </Link> */}
            {/*logout  */}
            <div
              className="text-white functions cursor-pointer  items-center rounded-md admin_btn p-4 mx-4 hover:bg-blue-600"
              onClick={() => dispatch(logout)}
            >
              <button className="rounded">Logout</button>
              &nbsp;
              <TbLogout className="" size={30} />
            </div>
          </div>

          <div className="main_bar px-4 bg-white flex-[70%]">
            <h1>You are now an Admin </h1>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
