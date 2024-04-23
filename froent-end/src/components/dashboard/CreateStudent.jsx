import React, { useState } from "react";
import axios from "axios"; 
function CreateStudent() {
  const [success, setSuccess] = useState(false);

  const [formDataIdCards, setFormDataIdCards] = useState({
    studentName: "",
    schoolCenter: "",
    classYear: "",
    indexNumber: "",
    nationality: "",
    validTill: "",
    file: "", // Change to null
    nationalNumber: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    if (e.target.name === "file") {
      // Handle file input separately
      setFormDataIdCards((prev) => ({
        ...prev,
        file: e.target.files[0], // Store file object
      }));
    } else {
      setFormDataIdCards((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(formDataIdCards).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await axios.post("http://localhost:9000/students-id-cards", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        clearForm();
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to clear the form
  const clearForm = () => {
    setFormDataIdCards({
      studentName: "",
      schoolCenter: "",
      classYear: "",
      indexNumber: "",
      nationality: "",
      validTill: "",
      file: "",
      nationalNumber: "",
    });
  };

  return (
    <div className="bg-gray-200 p-4 rounded">
      <h1 className="font-bold text-xl">Create Student ID Card</h1>
      <div className="my-4">
        <p className="font-bold">
          Enter student details and follow the prompts to generate your student
          ID online.
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
              value={formDataIdCards.studentName}
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
              value={formDataIdCards.schoolCenter}
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
              value={formDataIdCards.classYear}
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
              value={formDataIdCards.indexNumber}
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
              value={formDataIdCards.nationality}
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
              value={formDataIdCards.validTill}
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
              name="file"
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
              value={formDataIdCards.nationalNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded-md text-white font-bold"
            style={{ backgroundColor: "#4CAF50" }}
          >
            Create Student ID Card
          </button>
        </form>
   
        {success && (
          <div className="bg-green-600 p-2 rounded text-white text-xl">
            Student ID Card successfully created!
          </div>
        )}
        <div className="bg-white p-2">{/* <UpdateIdCard /> */}</div>
      </div>
    </div>
  );
}

export default CreateStudent;
