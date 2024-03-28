/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { BsQrCodeScan } from "react-icons/bs";

import { Link, Outlet } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { MdEdit, MdOutlineDelete } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { FaIdCard, FaList, FaRegEdit, FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";

import { IoMailUnread } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { SiObservable } from "react-icons/si";
import { SiBookstack } from "react-icons/si"; 
import axios from "axios";
const Dashboard = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // grtting the numbers
  const [users, setUsers] = useState([]);
  const [students, setStudents] = useState([]);
  const [lecturer, setLecturer] = useState([]);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:9000").then((res) => {
      if (res.data.Status === "success") {
        setAuth(true);
        setName(res.data.name);
      } else {
        setAuth(false);
        setMessage(res.data.Message);
      }
    });
  }, []);

  // numbers of admin
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:9000/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);
  // numners of students
  useEffect(() => {
    const fetchingAllTheStudents = async () => {
      try {
        const res = await axios.get("http://localhost:9000/students");
        setStudents(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingAllTheStudents();
  }, []);
  // numbers lecturere
  useEffect(() => {
    const fetchingAllTheStudents = async () => {
      try {
        const res = await axios.get("http://localhost:9000/signup");
        setLecturer(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingAllTheStudents();
  }, []);

  // logout
  const handleLogout = () => {
    axios
      .get("http://localhost:9000/logout")
      .then((res) => {
        if (res.data.Status === "success") {
          location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {auth ? (
        <div className="bg-[#2C3E50] py-24 h-full flex flex-col justify-between">
          <div className="flex justify-between w-11/12 m-auto items-between text-white">
            <h1 className="font-bold text-2xl">
              Hi 🎉🎉 <span className="text-[#fd4fb8]"> {name}</span>, Welcome
              onboard
            </h1>
            <div
              className="flex items-center rounded-md admin_btn p-2 bg-[#f60707] hover:bg-blue-600"
              onClick={handleLogout}
            >
              <TbLogout className="cursor-pointer" size={30} />
              <button className=" text-white rounded">Logout</button>
              &nbsp;
            </div>
          </div>
          <div className="flex  justify-between   w-11/12 m-auto py-8 ">
            <div className="bg-[#16405c] border-2 border-white flex-[30%] flex-col justify-between p-4">
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
                    <FaRegEdit size={30} />
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
              {/* Create New Student */}
              <Link to="create-new-student">
                <div className="functions">
                  <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                    <PiStudentBold size={30} />
                    <p className="ml-4">Register New Student</p>{" "}
                  </div>
                </div>
              </Link>
              {/* scan Student */}
              <Link to="scan-student">
                <div className="functions">
                  <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                    <BsQrCodeScan size={30} />
                    <p className="ml-4">Scan Student</p>{" "}
                  </div>
                </div>
              </Link>
              {/* Register  Student in a course */}
              <Link to="register-in-course">
                <div className="functions">
                  <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                    <SiBookstack size={30} />
                    <p className="ml-4">Register In Course</p>{" "}
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
              {/* Settings */}
              {/* <Link to="students">
                <div className="p-2 admin_hover bg-[#2d2b42] m-4 text-white rounded cursor-pointer flex items-center">
                  <IoSettingsSharp size={30} />
                  <p className="ml-4"> Settings</p>
                </div>
              </Link> */}
              <Link to="users">
                <div className="p-2 admin_hover bg-[#2d2b42] m-4 text-white rounded cursor-pointer flex items-center">
                  {/* <IoSettingsSharp size={30} /> */}
                  <FaUserFriends size={30} />
                  <p className="ml-4"> Users</p>
                </div>
              </Link>
              {/*logout  */}
              <div
                className="text-white functions cursor-pointer  items-center rounded-md admin_btn p-2 mx-4 hover:bg-blue-600 flex  bg-[#2d2b42]"
                onClick={handleLogout}
              >
                &nbsp;
                <TbLogout className="mr-4" size={30} />
                <button className="rounded">Logout</button>
              </div>
            </div>

            <div className="main_bar px-4  flex-[70%] bg-white py-4">
              <div className="grid grid-cols-3 gap-8 bg-[#2d2b42] rounded-lg text-white p-2 mb-4">
                {/* <div className="flex flex-col items-center cursor-pointer">
                  <div className="">
                    <BiMaleFemale size={30} />
                  </div>
                  <h1 className="font-bold">Female Students</h1>
                  <h1>12</h1>
                </div> */}
                <div className="cursor-pointer flex flex-col items-center bg-[#16405c] border py-4">
                  <div className="">
                    <FaUserGraduate size={30} />
                  </div>
                  <h1 className="font-bold">Students</h1>
                  <h1>{students?.length}</h1>
                </div>
                <div className="cursor-pointer flex flex-col items-center bg-[#16405c] border py-4">
                  <div className="">
                    <GiTeacher size={30} />
                  </div>
                  <h1 className="font-bold">Lecturer</h1>
                  <h1>{lecturer?.length}</h1>
                </div>
                <div className="cursor-pointer flex flex-col items-center bg-[#16405c] border py-4">
                  <div className="">
                    <MdAdminPanelSettings size={30} />
                  </div>
                  <h1 className="font-bold">Admin</h1>
                  <h1>{users?.length}</h1>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[400px] m-auto flex h-screen justify-center items-center flex-col ">
          <div className="bg-white p-4 rounded-md w-full">
            <div className="">{message}</div>
            <div className="w-full bg-blue-600 my-2 text-white text-center p-2 rounded-md hover:bg-blue-700">
              <Link className="   " to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
