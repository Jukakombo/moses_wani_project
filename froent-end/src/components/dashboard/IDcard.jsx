import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import QRCode from "qrcode";
import axios from "axios";
import UpdateICard from "./UpdateICard";

const IDcard = () => {
  const [qrcodes, setQrcodes] = useState({});
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [updateValues, setUpdateValues] = useState(null);

  const [search, setSearch] = useState("");

  // const cards = useSelector((state) => state.contacts);
  const [idCards, setIdCards] = useState([]);

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const res = await axios.get("http://localhost:9000/students-id-cards");
        setIdCards(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAttendances();
  }, []);

  useEffect(() => {
    const generateQRCode = async (id) => {
      try {
        const qrCodeData = await QRCode.toDataURL(
          `http://localhost:5173/${id}`,
          {
            width: 70,
            margin: 1,
            color: {
              dark: "#000",
            },
          }
        );
        setQrcodes((prevQrcodes) => ({
          ...prevQrcodes,
          [id]: qrCodeData,
        }));
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };

    idCards.forEach((x) => {
      generateQRCode(x.id);
    });
  }, [idCards]);

  const filterStudent = idCards.filter((x) =>
    x.studentName.toLowerCase().includes(search.toLowerCase())
  );

  const deleteIdCard = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/students-id-cards/${id}`);
      alert("Id card deleted successfully");
      setIdCards(idCards.filter((card) => card.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  // update id card

  return (
    <div className="">
      <div className="flex items-center ">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name=""
          id=""
          placeholder="Search student by name"
          className="w-full rounded-md p-2  bg-gray-300 outline-none mb-4"
        />
      </div>
      {update && (
        <UpdateICard
          updateId={updateId}
          updateValues={updateValues}
          setUpdateValues={setUpdateValues}
        />
      )}
      <div className="main_container grid grid-cols-1 md:grid-cols-2 mb-3 gap-3 p-3 rounded-md border">
        {filterStudent.length > 0 ? (
          filterStudent.map((x) => (
            <div className="" key={x._id}>
              <div className="  bg-blue-500 rounded-lg  w-[420px] pb-2    ">
                {/* card header */}
                <div className="header px-4 pt-1">
                  <div className="flex items-center">
                    <img
                      src="/logo.png"
                      alt="logo"
                      className="h-[60px] w-[60px]"
                    />
                    <h1 className="uppercase font-bold text-3xl text-white ml-4">
                      University of Juba
                    </h1>
                  </div>
                </div>
                {/* main content */}
                <Link to={`/view-id-card-with-qr-code/${x.id}`}>
                  <div className="content bg-gray-200 py-2 relative ">
                    <h1 className="text-blue-800 uppercase font-bold tracking-wider text-2xl px-4">
                      Student Id
                    </h1>
                    <div className="absolute bottom-0 right-1">
                      {qrcodes[x.id] && (
                        <img src={qrcodes[x.id]} alt="qrcode" />
                      )}
                    </div>
                    <div className="">
                      <div className="flex ">
                        <img
                          src={`http://localhost:9000/images/${x.profilePhoto}`}
                          alt="Photo"
                          className="w-[100px] border-2 border-black p-[1px] h-[100px] rounded-lg mx-4"
                        />
                        <div className="">
                          <div className="flex gap-2 text-xs">
                            <div className="font-bold">
                              <h1>Student Name </h1>
                              <h1>School / Center </h1>
                              <h1>Class / Year </h1>
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
                              <h1 className="text-blue-800">
                                : {x?.validTill}
                              </h1>
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

              <div className="flex items-center justify-between w-[420px] p-2">
                <button
                  onClick={() => {
                    setUpdate(true);
                    setUpdateId(x.id);
                    setUpdateValues(x);
                  }}
                  className="bg-green-600 text-white p-2 rounded-md"
                >
                  Update
                </button>

                <button
                  onClick={() => deleteIdCard(x.id)}
                  className="bg-red-600 text-white p-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="">
            <h2 className="text-red-500 font-bold text-md bg-gray-200 p-4 rounded-md">
              Sorry the name you have entered {"doesn'"}t exists!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default IDcard;
