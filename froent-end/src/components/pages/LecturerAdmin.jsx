/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiMaleFemale } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import { TbCircleArrowDownRight, TbLogout } from "react-icons/tb";
import { MdEdit, MdOutlineDelete } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { FaIdCard, FaList, FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";

import { IoMailUnread } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { SiObservable } from "react-icons/si";
import { SiBookstack } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";

const LecturerAdmin = () => {
  return (
    <div>
      {" "}
      {/* <Navigation /> */}
      <div className="bg-[#2C3E50] py-24 h-full flex flex-col justify-between">
        <div className="flex justify-between w-11/12 m-auto items-between text-white">
          <h1 className="font-bold text-2xl">
            Hi <span className="text-[#fd4fb8]">{"Hello professon: Ali"}</span>,
            QR-Code Generator!
          </h1>
          <div
            className="flex items-center rounded-md admin_btn p-2 bg-[#2d2b42] hover:bg-blue-600"
            onClick={() => {}}
          >
            <TbLogout className="cursor-pointer" size={30} />
            <button className=" text-white rounded">Logout</button>
            &nbsp;
          </div>
        </div>
        <div className="flex  justify-between   w-11/12 m-auto py-8 ">
          <div className="bg-[#16405c] border-2 border-white flex-[30%] flex-col justify-between p-4">
            {/* take attendance */}
            <Link to="take-attendance">
              <div className="functions">
                <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                  <MdEdit size={30} />
                  <p className="ml-4">Take Attendance</p>{" "}
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

            {/*logout  */}
            <div
              className="text-white functions cursor-pointer    rounded-md admin_btn p-2 mx-4 hover:bg-blue-600 flex items-center bg-[#2d2b42]"
              onClick={() => {}}
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
    </div>
  );
};

export default LecturerAdmin;
