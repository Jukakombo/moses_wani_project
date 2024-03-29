import axios from "axios";
import { useEffect, useState } from "react"; 
const TakeAttendance = () => {
  const [success, setSuccess] = useState(false);
  const [attendance, setAttendance] = useState({
    studentName: "",
    rollNumber: "",
    status: "",
    timestamps: "",
    professorName: "",
    subject: "",
  });
  const handleChange = (e) => {
    setAttendance((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/attendances", attendance);
    } catch (error) {
      console.log(error);
    }
    setSuccess(true);
    clearAttendanceForm();
    setTimeout(() => {
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 2000);
  };
  const clearAttendanceForm = () => {
    setAttendance({
      studentName: "",
      rollNumber: "",
      status: "",
      timestamps: "",
      professorName: "",
      subject: "",
    });
  };
  return (
    <div>
      <div className="bg-[#F5F5F5] rounded-md p-2">
        <div className=" grid grid-cols-2 gap-8 my-2">
          <div className="flex flex-col">
            <label className="font-bold">Student Name</label>
            <input
              type="text"
              name="studentName"
              placeholder="Student Name"
              onChange={handleChange}
              value={attendance.studentName}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Roll Number </label>
            <input
              type="text"
              name="rollNumber"
              placeholder="Roll Number  "
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
              value={attendance.rollNumber}
            />{" "}
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Status </label>
            <input
              type="text"
              name="status"
              placeholder="Status"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
              value={attendance.status}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Time Stamps </label>
            <input
              type="date"
              name="timestamps"
              placeholder="Status"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
              value={attendance.timestamps}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Professor </label>
            <input
              type="text"
              name="professorName"
              placeholder="Professor Name"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
              value={attendance.professorName}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Subject </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
              value={attendance.subject}
            />
          </div>
        </div>
        <button
          className="bg-blue-600 p-2 w-full  my-4 text-white rounded-md"
          onClick={handleClick}
        >
          Sumit
        </button>
        {success && (
          <div className="bg-green-600 text-white font-bold rounded-md p-2 text-center">
            {"🚀🚀🚀 "}Attendance is Successfully Submitted!
          </div>
        )}
      </div>
    </div>
  );
};

export default TakeAttendance;
