import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// const initialStates = {
//   RegNumber: "",
//   Title: "",
//   FirstName: "",
//   LastName: "",
//   OtherName: "",
//   DateOfBirth: "",
//   Gender: "",
//   MaritalStatus: "",
//   Nationality: "",
//   StateOfOrigin: "",
//   LGA: "",
//   TownOfOrigin: "",
//   Address: "",
//   Email: "",
//   Mobile: "",
//   GuardianName: "",
//   GuardianNumber: "",
//   GuardianAddress: "",
//   Faculty: "",
//   Department: "",
//   Level: "",
//   Onleave: "",
//   Onsuspension: "",
//   Expelled: "",
//   Hostel: "",
//   OffCampus: "",
//   MentorName: "",
//   MentorNumber: "",
//   MentorDepartment: "",
//   Passport: "",
//   Total: "",
// };
const CreateStudents = () => {
  const [students, setStudents] = useState({
    RegNumber: null,
    Title: "",
    FirstName: "",
    LastName: "",
    OtherName: "",
    DateOfBirth: "",
    Gender: "",
    MaritalStatus: "",
    Nationality: "",
    StateOfOrigin: "",
    LGA: "",
    TownOfOrigin: "",
    Address: "",
    Email: "",
    Mobile: "",
    GuardianName: "",
    GuardianNumber: "",
    GuardianAddress: "",
    Faculty: "",
    Department: "",
    Level: "",
    Onleave: "",
    Onsuspension: "",
    Expelled: "",
    Hostel: "",
    OffCampus: "",
    MentorName: "",
    MentorNumber: "",
    MentorDepartment: "",
    Passport: "",
    Total: "",
  });

  // const navigate = useNavigate();

  const handleChange = (e) => {
    setStudents((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/students", students);
      // navigate("/");
      console.log(students);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#f5F5F5] p-4">
      <div className="">
        <h1 className="font-bold text-lg">Add new Student to system</h1>
        <p className="py-4 italic">
          Ensure that all fields in the enrollment form are accurately filled
          out with relevant information. Incomplete or erroneous entries may
          lead to complications in student management and communication.
        </p>
        <div className="form grid grid-cols-2 gap-8 ">
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Registration Number
            </label>
            <input
              type="number"
              name="RegNumber"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Registration Number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Title
            </label>
            <input
              type="text"
              name="Title"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Title"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Frist Name
            </label>
            <input
              type="text"
              name="FirstName"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Frist Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Last Name
            </label>
            <input
              type="text"
              name="LastName"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Other Name
            </label>
            <input
              type="text"
              name="OtherName"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Other Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Date Of Birth
            </label>
            <input
              type="text"
              name="DateOfBirth"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Registration text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Gender
            </label>
            <input
              type="text"
              name="Gender"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Gender"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Marital Status
            </label>
            <input
              type="text"
              name="MaritalStatus"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Marital Status"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Nationality
            </label>
            <input
              type="text"
              name="Nationality"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Nationality"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              State Of Origin
            </label>
            <input
              type="text"
              name="StateOfOrigin"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="State Of Origin"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              LGA
            </label>
            <input
              type="text"
              name="LGA"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="LGA"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Town Of Origin
            </label>
            <input
              type="text"
              name="TownOfOrigin"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Town Of Origin  "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Address
            </label>
            <input
              type="text"
              name="Address"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Address"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Email
            </label>
            <input
              type="text"
              name="Email"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Mobile
            </label>
            <input
              type="text"
              name="Mobile"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Mobile"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Guardian Name
            </label>
            <input
              type="text"
              name="GuardianName"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Guardian Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Guardian Number
            </label>
            <input
              type="text"
              name="GuardianNumber"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Guardian Number  "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Guardian Address
            </label>
            <input
              type="text"
              name="GuardianAddress"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Guardian Address"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Faculty
            </label>
            <input
              type="text"
              name="Faculty"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Faculty"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Department
            </label>
            <input
              type="text"
              name="Department"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Department"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Level
            </label>
            <input
              type="text"
              name="Level"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Level"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              On Leave
            </label>
            <input
              type="text"
              name="Onleave"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="On Leave  "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              On Suspension
            </label>
            <input
              type="text"
              name="Onsuspension"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="On Suspension"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Expelled
            </label>
            <input
              type="text"
              name="Expelled"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Expelled"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Hostel
            </label>
            <input
              type="text"
              name="Hostel"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Hostel"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Off Campus
            </label>
            <input
              type="text"
              name="OffCampus"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Off Campus"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Mentor Name
            </label>
            <input
              type="text"
              name="MentorName"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Mentor Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Mentor Number
            </label>
            <input
              type="text"
              name="MentorNumber"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Mentor Number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Mentor Department
            </label>
            <input
              type="text"
              name="MentorDepartment"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Mentor Department"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Passport
            </label>
            <input
              type="text"
              name="Passport"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Passport"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Total
            </label>
            <input
              type="text"
              name="Total"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Total"
            />
          </div>
        </div>
        <button
          onClick={handleClick}
          className="p-2 bg-blue-600 text-white font-bold w-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateStudents;
