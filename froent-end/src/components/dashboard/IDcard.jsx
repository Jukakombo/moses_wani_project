import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const IDcard = () => {
  const cards = useSelector((state) => state.contacts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb- gap-3 ">
      <div className="main_container">
        {cards.map((x) => (
          <div
            key={x._id}
            className="  bg-blue-500 rounded-lg  w-[420px] pb-2    "
          >
            {/* card header */}
            <div className="header px-4 pt-1">
              <div className="flex items-center">
                <img src="/logo.png" alt="logo" className="h-[60px] w-[60px]" />
                <h1 className="uppercase font-bold text-3xl text-white ml-4">
                  University of Juba
                </h1>
              </div>
            </div>
            {/* main conatin */}
            <Link to={`/view-id-card-with-qr-code/${x._id}`}>
              <div className="content bg-gray-200 py-2 ">
                <h1 className="text-blue-800 uppercase font-bold tracking-wider text-2xl px-4">
                  Studen Id
                </h1>
                <div className="">
                  <div className="flex ">
                    <img
                      src={x?.profilePhoto}
                      alt="Photo"
                      className="w-[100px] border-2 border-black p-[1px] h-[100px] rounded-lg mx-4"
                    />
                    <div className="">
                      <div className="flex gap-2 text-xs">
                        <div className="font-bold">
                          <h1>Student Name </h1>
                          <h1>School/Center </h1>
                          <h1>Class/Year </h1>
                          <h1>Index Number </h1>
                          <h1>Nationality </h1>
                          <h1 className="text-green-600">Valid Till </h1>
                        </div>
                        <div className="font-bold">
                          <h1>: {x?.studentName}</h1>
                          <h1>: {x?.schoolCenter}</h1>
                          <h1>: {x?.classYear}</h1>
                          <h1>: {x?.indexNumber}</h1>
                          <h1>: {x?.nationality}</h1>
                          <h1 className="text-blue-800">: {x?.validTill}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            {/* footer */}
            <div className="flex mt-1 items-center justify-between px-4 text-white">
              <div className="">National Number :{x?.nationalNumber}</div>
              <div className="">
                <div className="flex items-center ">
                  <h1 className="mr-4">{"Dean's"} Sign</h1>
                  <div className="bg-white">
                    <img
                      src="/x.png"
                      alt="signature"
                      className="h-[30px] w-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IDcard;
