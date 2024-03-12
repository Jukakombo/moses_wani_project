import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-10/12 m-auto my-8 grid grid-cols-1 md:grid-cols-2 gap-8 ">
      <div className="">
        <h1 className="my-8 text-white font-bold text-2xl md:text-5xl tracking-widest">
          Empower Your Connections with <br className="mt-4" /> Our Dynamic QR
          Code Generator!
        </h1>
        <p className="my-8 text-white text-xl">
          Unlock the Power of Connectivity with our QR Code Generator! Transform
          your messages into seamless links, effortlessly bridging the digital
          and physical worlds.
        </p>
        <p className="my-8 text-white text-xl">
          Simplify sharing, enhance engagement, and empower your connections
          with every scan. Create, customize, and captivate with ease. Elevate
          your communication today!
        </p>
        <div className="flex items-center my-4  ">
          <Link to={"/about"}>
            <button className="mr-2 md:mr-4 button w-[150px] p-2 rounded-md text-white font-bold">
              Read More
            </button>
          </Link>
          <Link to="/login">
            <button className="button w-[150px] p-2 rounded-md text-white font-bold">
              Get QR Code
            </button>
          </Link>
        </div>
      </div>
      <div className=" m-auto">
        <img
          src="/qrcode.gif"
          alt="img"
          className="rounded-xl   border-[#6D214F] p-2 border-4"
        />
      </div>
    </div>
  );
};

export default Home;
