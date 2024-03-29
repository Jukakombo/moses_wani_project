import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";
import { useState, useEffect } from "react";

const IDCardWithQRCode = () => {
  const [qrcode, setQrcode] = useState("");
  const params = useParams();
  const { id } = params;
  const cards = useSelector((state) => state.contacts);
  const x = cards.find((x) => x._id === id);

  const createPDF = async () => {
    const pdfWidth = 420;
    const pdfHeight = 263;
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [pdfWidth, pdfHeight],
    });
    const data = await document.querySelector("#pdf");
    pdf.html(data).then(() => {
      pdf.save(x.studentName);
    });
  };

  const generateQRCode = async () => {
    try {
      const qrCodeData = await QRCode.toDataURL(`Unique Number: ${x._id}\nIndex Number: ${x.indexNumber}\nName: ${x?.studentName}`, {
        width: 70,
        margin: 1,
        color: {
          dark: "#000",
        },
      });
      setQrcode(qrCodeData);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  useEffect(() => {
    generateQRCode();
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <div className=" flex justify-center h-screen flex-col items-center ">
      <div id="pdf" className="">
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
          {/* main content */}
          <div className="  bg-gray-200 py-2 relative">
            <h1 className="text-blue-800 uppercase font-bold tracking-wider text-2xl mb-2 px-4">
              Student ID
            </h1>
            <div className="absolute bottom-0 right-1">
              {qrcode && <img src={qrcode} alt="qrcode" />}
            </div>
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
                      <h1>School&nbsp;&nbsp;&nbsp;/&nbsp;Center </h1>
                      <h1>Class&nbsp;&nbsp;&nbsp;/&nbsp;Year </h1>
                      <h1>Index Number </h1>
                      <h1>Nationality </h1>
                      <h1 className="text-green-600">Valid Till </h1>
                    </div>
                    <div className="font-bold ">
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

          {/* footer */}
          <div className="flex mt-1 items-center justify-between px-4 text-white">
            <div className="">National Number: {x?.nationalNumber}</div>
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
      </div>

      <div className="flex items-center  my-2">
        <button
          onClick={createPDF}
          className="bg-blue-600 p-2 rounded-md w-[200px] mr-2 text-white"
        >
          Download ID Card{" "}
        </button>
      </div>
    </div>
  );
};

export default IDCardWithQRCode;
