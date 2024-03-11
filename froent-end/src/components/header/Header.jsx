import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";
const links = [
  {
    _id: "jkhdjdj",
    name: "Home",
    path: "/",
  },
  {
    _id: "jkfhdjdj",
    name: "About QR-code",
    path: "/about",
  },
  {
    _id: "hdjhdsjh",
    name: "Contact",
    path: "/contact",
  },
  {
    _id: "jkhdddddjdj",
    name: "Admin",
    path: "/login",
  },
];
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navigation shadow-lg text-white h-16 py-4">
        <div className="flex justify-between w-10/12 m-auto">
          <Link className="font-bold text-2xl uppercase" to="/">
            QR-Code Generator
          </Link>
          <div className="flex  items-center ">
            {links.map((x) => (
              <ul className="flex items-center hidden md:block" key={x._id}>
                <Link to={`${x.path}`} className="hover:underline  ">
                  <li className="ml-4 text-lg">{x?.name}</li>
                </Link>
              </ul>
            ))}
            <div className="menu_hamburger" onClick={() => setOpen((prev) => !prev)}>
              {open ? <FaRegWindowClose size={30} /> : <IoMenu size={30} />}
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className=" footer h-[calc(100vh-4rem)] w-[90%] p-2">
          {links.map((x) => (
            <div className="flex flex-col    md:hidden  " key={x._id}>
              <Link to={`${x.path}`} className="hover:underline  ">
                <li className="ml-4 text-xl text-gray-100 font-bold button my-2 p-2 rounded-md">
                  {x?.name}
                </li>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
