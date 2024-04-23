/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
const UpdateAttendance = ({ updateId, updateValues, setUpdateValues }) => {

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setUpdateValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        "http://localhost:9000/attendances/" + updateId,
        updateValues
      );
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
    setUpdateValues({
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
        <form className=" grid grid-cols-2 gap-8 my-2" onSubmit={handleClick}>
          <div className="flex flex-col">
            <label className="font-bold">Student Name</label>
            <input
              type="text"
              name="studentName"
              placeholder="Student Name"
              onChange={handleChange}
              value={updateValues.studentName}
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
              value={updateValues.rollNumber}
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
              value={updateValues.status}
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
              value={updateValues.timestamps}
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
              value={updateValues.professorName}
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
              value={updateValues.subject}
            />
          </div>
          <button
            className="bg-blue-600 p-2 w-full  my-4 text-white rounded-md"
            type="submit"
          >
            Update
          </button>
          {success && (
            <div className="bg-green-600 text-white font-bold rounded-md p-2 text-center">
              {"🚀🚀🚀 "}Attendance Successfully Updated!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateAttendance;
