/* eslint-disable react/prop-types */
import React, { useState } from "react";
import axios from "axios";

function UpdateICard({ updateId, updateValues, setUpdateValues, setUpdate }) {
  const [success, setSuccess] = useState(false);

  const _id = Number(updateId);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdateValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:9000/students-id-cards/${_id}`,
        updateValues
      );

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setUpdate(false);
        clearForm();
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const clearForm = () => {
    setUpdateValues({
      studentName: "",
      schoolCenter: "",
      classYear: "",
      indexNumber: "",
      nationality: "",
      validTill: "",
      profilePhoto: "",
      nationalNumber: "",
    });
    // Clear file input value
    document.getElementById("profilePhoto").value = "";
  };
  return (
    <div className="bg-gray-200 p-4 rounded">
      <h1 className="font-bold text-xl">Update Student ID Card</h1>
      <div className="my-4">
        <p className="font-bold">
          Enter student details and follow the prompts to Update your student ID
          online.
        </p>
        <form
          onSubmit={handleSubmit}
          className="border border-white p-2 my-2 rounded grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Other input fields */}
          <div className="flex flex-col">
            <label htmlFor="studentName" className="font-bold text-gray-600">
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              id="studentName"
              className="p-2 w-full rounded-md outline-none"
              placeholder="Student Name"
              value={updateValues.studentName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="schoolCenter" className="font-bold text-gray-600">
              School / Center
            </label>
            <input
              type="text"
              name="schoolCenter"
              id="schoolCenter"
              className="p-2 w-full rounded-md outline-none"
              placeholder="School / Center"
              value={updateValues.schoolCenter}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="classYear" className="font-bold text-gray-600">
              Class / Year
            </label>
            <input
              type="text"
              name="classYear"
              id="classYear"
              className="p-2 w-full rounded-md outline-none"
              placeholder="Class / Year"
              value={updateValues.classYear}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="indexNumber" className="font-bold text-gray-600">
              Index Number
            </label>
            <input
              type="text"
              name="indexNumber"
              id="indexNumber"
              className="p-2 w-full rounded-md outline-none"
              placeholder="Index Number"
              value={updateValues.indexNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="nationality" className="font-bold text-gray-600">
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              id="nationality"
              className="p-2 w-full rounded-md outline-none"
              placeholder="Nationality"
              value={updateValues.nationality}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="validTill" className="font-bold text-gray-600">
              Valid Till
            </label>
            <input
              type="date"
              name="validTill"
              id="validTill"
              className="p-2 w-full rounded-md outline-none"
              value={updateValues.validTill}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="profilePhoto" className="font-bold text-gray-600">
              Student Photo
            </label>
            <input
              type="file"
              onChange={handleChange}
              // value={updateValues.profilePhoto}
              name="profilePhoto"
              id="profilePhoto"
              className="p-2 w-full rounded-md outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nationalNumber" className="font-bold text-gray-600">
              National Number
            </label>
            <input
              type="text"
              name="nationalNumber"
              id="nationalNumber"
              className="p-2 w-full rounded-md outline-none"
              placeholder="National Number"
              value={updateValues.nationalNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded-md text-white font-bold"
            style={{ backgroundColor: "#4CAF50" }}
          >
            Update Student ID Card
          </button>
        </form>
        {success && (
          <div className="bg-green-600 p-2 rounded text-white text-xl">
            Student ID Card successfully updated!
          </div>
        )}
        <div className="bg-white p-2">{/* <UpdateIdCard /> */}</div>
      </div>
    </div>
  );
}

export default UpdateICard;
