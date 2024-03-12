import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
// import UpdateCertificate from "./UpdateCertificate";
import { useEffect } from "react";
import { createContact, updateContact } from "../../actions/contacts";
import UpdateIdCard from "./UpdateIdCard";

function CreateStudent() {
  const cards = useSelector((state) => state.contacts);
  const [currentId, setCurrentId] = useState(0);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    studentName: "",
    schoolCenter: "",
    classYear: "",
    indexNumber: "",
    nationality: "",
    validTill: "",
    profilePhoto: "",
    nationalNumber: "",
  });

  const updateIDCard = useSelector((state) =>
    currentId ? state.contacts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (updateIDCard) setFormData(updateIDCard);
  }, [updateIDCard]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateContact(currentId, formData));
      clear();
    } else {
      dispatch(createContact(formData));
      clear();
      setTimeout(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }, 3000);
    }
  };

  const clear = () => {
    setFormData({
      studentName: "",
      schoolCenter: "",
      classYear: "",
      indexNumber: "",
      nationality: "",
      validTill: "",
      img: "",
      profilePhoto: "",
      nationalNumber: "",
    });
    setCurrentId(0);
  };
  return (
    <div>
      <div className="bg-gray-200 p-4 rounded">
        <h1 className=" font-bold text-xl">Create Student Id Card</h1>
        <div className="my-4">
          <p className="font-bold">
            Enter student details and follow the prompts to generate your
            student ID online
          </p>
          <form
            onSubmit={handleSubmit}
            className="border border-white p-2 my-2 rounded grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="flex  flex-col">
              <label htmlFor="studentName" className="font-bold text-gray-600 ">
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                id="studentName"
                className="p-2  w-full rounded-md outline-none"
                placeholder="Student Name"
                value={formData.studentName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    studentName: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="flex  flex-col">
              <label htmlFor="center" className="font-bold text-gray-600 ">
                School / Center
              </label>
              <input
                type="text"
                name="choolCenter"
                id="center"
                className="p-2  w-full rounded-md outline-none"
                placeholder="School / Center"
                value={formData.schoolCenter}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    schoolCenter: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="flex  flex-col">
              <label htmlFor="year" className="font-bold text-gray-600 my-">
                Class / Year
              </label>
              <input
                type="text"
                name="classYear"
                id="year"
                className="p-2  w-full rounded-md outline-none"
                placeholder="Class / Year"
                value={formData.classYear}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    classYear: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="flex  flex-col">
              <label
                htmlFor="indexNumber"
                className="font-bold text-gray-600 my-"
              >
                Index Number
              </label>
              <input
                type="text"
                name="indexNumber"
                id="indexNumber"
                className="p-2  w-full rounded-md outline-none"
                placeholder="Index Number"
                value={formData.indexNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    indexNumber: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="flex  flex-col">
              <label
                htmlFor="nationality"
                className="font-bold text-gray-600 my-"
              >
                Nationality
              </label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                className="p-2  w-full rounded-md outline-none"
                placeholder="Nationality"
                value={formData.nationality}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    nationality: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="flex  flex-col">
              <label
                htmlFor="nationalNumber"
                className="font-bold text-gray-600 my-"
              >
                National Number
              </label>
              <input
                type="text"
                name="nationalNumber"
                id="nationalNumber"
                className="p-2  w-full rounded-md outline-none"
                placeholder="National Number"
                value={formData.nationalNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    nationalNumber: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="flex  flex-col">
              <label
                htmlFor="validTill"
                className="font-bold text-gray-600 my-"
              >
                Valid Till
              </label>
              <input
                type="text"
                name="validTill"
                id="validTill"
                className="p-2  w-full rounded-md outline-none"
                placeholder="valid till"
                value={formData.validTill}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    validTill: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="flex  flex-col border border-gray-300">
              <label
                htmlFor="validTill"
                className="font-bold text-gray-600 rounded-md my-"
              >
                Student Photo
              </label>
              <FileBase
                style={{ display: "none" }}
                id="photo"
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setFormData({ ...formData, profilePhoto: base64 })
                }
              />
            </div>
            <button className="navigation w-full p-2 rounded-md text-white font-bold">
              Create Student ID Card
            </button>
          </form>
          {success && (
            <div className="bg-green-600 p-2 rounded text-white  text-xl">
              Student ID Card is Successfully Created{"🚀 "}
            </div>
          )}
          <div className="bg-white p-2">
            <UpdateIdCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStudent;
