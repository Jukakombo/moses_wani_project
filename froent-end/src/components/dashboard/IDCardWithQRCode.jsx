import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";
import { useState, useEffect } from "react";
import axios from "axios";

const IDCardWithQRCode = () => {
  const [qrcode, setQrcode] = useState("");
  const params = useParams();
  const id = Number(params.id);

  const [cards, setCards] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const res = await axios.get("http://localhost:9000/students-id-cards");
        setCards(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudentData();
  }, []);

  useEffect(() => {
    const student = cards.find((student) => student.id === id);
    if (student) {
      setSelectedStudent(student);
    } else {
      console.log(`Student with ID ${id} not found.`);
    }
  }, [id, cards]);
  const createPDF = async () => {
    if (selectedStudent && qrcode) {
      const pdfWidth = 420;
      const pdfHeight = 263;
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [pdfWidth, pdfHeight],
      });

      // Set text color to black
      pdf.setTextColor("#000");

      // Get the HTML element containing the ID card
      const data = document.querySelector("#pdf");

      // Add image and QR code
      const qrImage = new Image();
      qrImage.src = qrcode;
      pdf.addImage(qrImage, "JPEG", pdfWidth - 100, pdfHeight - 100, 80, 80);

      // Convert HTML to PDF
      pdf.html(data).then(() => {
        // Save PDF with student name as filename
        pdf.save(selectedStudent.studentName);
      });
    }
  };

 

  const generateQRCode = async () => {
    if (selectedStudent) {
      try {
        const qrCodeData = await QRCode.toDataURL(
          `Unique Number: ${selectedStudent.id}\nIndex Number: ${selectedStudent.indexNumber}\nName: ${selectedStudent.studentName}`,
          {
            width: 70,
            margin: 1,
            color: {
              dark: "#000",
            },
          }
        );
        setQrcode(qrCodeData);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    }
  };

  useEffect(() => {
    generateQRCode();
  }, [selectedStudent]);

  return (
    <div className="flex justify-center h-screen flex-col items-center">
      <div id="pdf" className="">
        <div className="bg-blue-500 rounded-lg w-[420px] pb-2">
          {/* Card header */}
          <div className="header px-4 pt-1">
            <div className="flex items-center">
              <img src="/logo.png" alt="logo" className="h-[60px] w-[60px]" />
              <h1 className="uppercase font-bold text-3xl text-white ml-4">
                University of Juba
              </h1>
            </div>
          </div>
          {/* Main content */}
          <div className="bg-gray-200 py-2 relative">
            <h1 className="text-blue-800 uppercase font-bold tracking-wider text-2xl mb-2 px-4">
              Student ID
            </h1>
            <div className="absolute bottom-0 right-1">
              {qrcode && <img src={qrcode} alt="qrcode" />}
            </div>
            <div>
              <div className="flex">
                <img
                  src={`http://localhost:9000/images/${selectedStudent?.profilePhoto}`}
                  alt="Photo"
                  className="w-[100px] border-2 border-black p-[1px] h-[100px] rounded-lg mx-4"
                />
                <div>
                  <div className="flex gap-2 text-xs font-bold">
                    <div>
                      <h1>Student Name: {selectedStudent?.studentName}</h1>
                      <h1>School/Center: {selectedStudent?.schoolCenter}</h1>
                      <h1>Class/Year: {selectedStudent?.classYear}</h1>
                      <h1>Index Number: {selectedStudent?.indexNumber}</h1>
                      <h1>Nationality: {selectedStudent?.nationality}</h1>
                      <h1 className="text-green-600">
                        Valid Till: {selectedStudent?.validTill}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="flex mt-1 items-center justify-between px-4 text-white">
            <div>National Number: {selectedStudent?.nationalNumber}</div>
            <div className="flex items-center">
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
      <div className="flex items-center my-2">
        <button
          onClick={createPDF}
          className="bg-blue-600 p-2 rounded-md w-[200px] mr-2 text-white"
          disabled={!qrcode} // Disable button if QR code is not generated yet
        >
          Download ID Card
        </button>
      </div>
    </div>
  );
};

export default IDCardWithQRCode;
