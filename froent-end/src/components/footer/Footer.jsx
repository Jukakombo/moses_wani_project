import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer py-8">
        <div className="w-10/12 m-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="">
            <h1 className="font-bold text-white text-lg">QR-Code Generator</h1>
            <p className="text-gray-200 text-lg">
              Generate QR codes instantly for your convenience with our
              user-friendly website, simplifying data sharing and access
              effortlessly.
            </p>
          </div>
          <div className="">
            <h1 className="font-bold text-white text-lg">Why QR Code</h1>
            <ul className="text-gray-200 text-lg">
              <li>
                <Link to="/about">QR Code</Link>
              </li>
              <li>
                <Link to="/about">Generate QR-Code</Link>
              </li>
              <li>
                <Link to="/about">Instruction</Link>
              </li>
              <li>
                <Link to="/login">View Student ID</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-bold text-white text-lg">About Us</h1>
            <ul className="text-gray-200 text-lg">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Admin</Link>
              </li>
            </ul>
          </div>{" "}
          <div className="">
            <h1 className="font-bold text-white text-lg">Terms & Condition</h1>
            <ul className="text-gray-200 text-lg">
              <li>
                <Link to="#">Info</Link>
              </li>
              <li>
                <Link to="/contact">Contact Admin</Link>
              </li>
              <li>
                <Link to="/contact">Troubleshooting</Link>
              </li>
              <li>
                <Link to="/contact">Report To Admin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-4 text-xs text-center text-white y-2  navigation">
        <h1 className="text-white font-bold texxt-xl mb-2">
          Developed by: Moses Wani
        </h1>
        <p>
          &copy; Copyright 2024 - {new Date().getFullYear()}. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
