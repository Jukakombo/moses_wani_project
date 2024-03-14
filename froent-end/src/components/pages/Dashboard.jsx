/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiMaleFemale } from "react-icons/bi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { TbCircleArrowDownRight, TbLogout } from "react-icons/tb";
import { MdEdit, MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { IoIosCreate } from "react-icons/io";
import { FaIdCard, FaList, FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineLogin } from "react-icons/ai";
import { IoMailUnread } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { SiObservable } from "react-icons/si";

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
            className="flex items-center rounded-md admin_btn p-2 bg-[#2d2b42] hover:bg-blue-600"
            onClick={() => dispatch(logout)}
          >
            <TbLogout className="cursor-pointer" size={30} />
            <button className=" text-white rounded">Logout</button>
            &nbsp;
          </div>
        </div>
        <div className="flex  justify-between   w-11/12 m-auto py-8 ">
          <div className="bg-[#16405c] border-2 border-white flex-[30%] flex-col justify-between p-4">
            {/* login as a prof */}
            <Link to="students">
              <div className="p-2 admin_hover bg-[#2d2b42] m-4 text-white rounded cursor-pointer flex items-center">
                <AiOutlineLogin size={30} />

                <p className="ml-4"> Login as aLecturer</p>
              </div>
            </Link>
            <Link to="students">
              <div className="p-2 admin_hover bg-[#2d2b42] m-4 text-white rounded cursor-pointer flex items-center">
                <FaIdCard className="text-white" size={30} />
                <p className="ml-4"> Students ID Cards</p>
              </div>
            </Link>
            {/* create id */}

            <Link to="create-student">
              <div className="functions">
                <div className="p-2 admin_hover bg-[#2d2b42] m-4   text-white rounded cursor-pointer flex items-center">
                  <IoIosCreate size={30} />
                  <p className="ml-4">Create Student Id Card</p>
                </div>
              </div>
            </Link>

            {/* take attendance */}
            <Link to="take-attendance">
              <div className="functions">
                <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                  <MdEdit size={30} />
                  <p className="ml-4">Take Attendance</p>{" "}
                </div>
              </div>
            </Link>
            <Link to="modify-attendance">
              <div className="functions">
                <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                  <TbCircleArrowDownRight size={30} />
                  <p className="ml-4">Modify Attendance</p>{" "}
                </div>
              </div>
            </Link>
            {/* view Attendence */}
            <Link to="view-attendance">
              <div className="functions">
                <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                  <FaList size={30} />
                  <p className="ml-4">View Attendance</p>{" "}
                </div>
              </div>
            </Link>
            {/* Create Student */}
            <Link to="create-new-student">
              <div className="functions">
                <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                  <PiStudentBold size={30} />
                  <p className="ml-4">Register New Student</p>{" "}
                </div>
              </div>
            </Link>
            {/* Create tracking */}
            <Link to="creact-tracking">
              <div className="functions">
                <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                  <SiObservable size={30} />
                  <p className="ml-4">Track Student</p>{" "}
                </div>
              </div>
            </Link>

            {/* sms students / parents */}
            <Link to="sms-student-parent">
              <div className="functions">
                <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                  <MdOutlineDelete size={30} />
                  <p className="ml-4">SMS Student Parents</p>{" "}
                </div>
              </div>
            </Link>
            {/* contact */}
            <Link to="contact-list">
              <div className="functions ">
                <div className="p-2 admin_hover bg-[#2d2b42] m-4 text-white rounded cursor-pointer flex items-center">
                  <IoMailUnread size={30} />
                  <p className="ml-4"> Contacts</p>
                </div>
              </div>
            </Link>

            {/*logout  */}
            <div
              className="text-white functions cursor-pointer  items-center rounded-md admin_btn p-2 mx-4 hover:bg-blue-600 flex items-center bg-[#2d2b42]"
              onClick={() => dispatch(logout)}
            >
              &nbsp;
              <TbLogout className="mr-4" size={30} />
              <button className="rounded">Logout</button>
            </div>
          </div>

          <div className="main_bar px-4  flex-[70%] bg-white py-4">
            <div className="grid grid-cols-4 gap-8 bg-[#2d2b42] rounded-lg text-white p-2 mb-4">
              <div className="flex flex-col items-center cursor-pointer">
                <div className="">
                  <BiMaleFemale size={30} />
                </div>
                <h1 className="font-bold">Female Students</h1>
                <h1>12</h1>
              </div>
              <div className="cursor-pointer flex flex-col items-center">
                <div className="">
                  <FaUserGraduate size={30} />
                </div>
                <h1 className="font-bold">Male Students</h1>
                <h1>12</h1>
              </div>
              <div className="cursor-pointer flex flex-col items-center">
                <div className="">
                  <GiTeacher size={30} />
                </div>
                <h1 className="font-bold">Lecturer</h1>
                <h1>12</h1>
              </div>
              <div className="cursor-pointer flex flex-col items-center">
                <div className="">
                  <MdAdminPanelSettings size={30} />
                </div>
                <h1 className="font-bold">Admin</h1>
                <h1>12</h1>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
