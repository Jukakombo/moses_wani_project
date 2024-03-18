import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateStudents = () => {
  const [success, setSuccess] = useState(false);
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
    file: "",
  });

  // const navigate = useNavigate();

  const handleChange = (e) => {
    setStudents((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("RegNumber", students.RegNumber);
      formData.append("Title", students.Title);
      formData.append("FirstName", students.FirstName);
      formData.append("LastName", students.LastName);
      formData.append("OtherName", students.OtherName);
      formData.append("DateOfBirth", students.DateOfBirth);
      formData.append("Gender", students.Gender);
      formData.append("MaritalStatus", students.MaritalStatus);
      formData.append("Nationality", students.Nationality);
      formData.append("StateOfOrigin", students.StateOfOrigin);
      formData.append("LGA", students.LGA);
      formData.append("TownOfOrigin", students.TownOfOrigin);
      formData.append("Address", students.Address);
      formData.append("Email", students.Email);
      formData.append("Mobile", students.Mobile);
      formData.append("GuardianName", students.GuardianName);
      formData.append("GuardianNumber", students.GuardianNumber);
      formData.append("GuardianAddress", students.GuardianAddress);
      formData.append("Faculty", students.Faculty);
      formData.append("Department", students.Department);
      formData.append("Level", students.Level);
      formData.append("Onleave", students.Onleave);
      formData.append("Onsuspension", students.Onsuspension);
      formData.append("Expelled", students.Expelled);
      formData.append("Hostel", students.Hostel);
      formData.append("OffCampus", students.OffCampus);
      formData.append("MentorName", students.MentorName);
      formData.append("MentorNumber", students.MentorNumber);
      formData.append("MentorDepartment", students.MentorDepartment);
      formData.append("Passport", students.Passport);
      formData.append("Total", students.Total);
      formData.append("file", students.file);
      await axios
        .post("http://localhost:9000/students", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          setSuccess(true);  
          setTimeout(() => {
            setSuccess(false); 
            clearStudentDataAfterSubmitTheForm();
          }, 3000);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  const clearStudentDataAfterSubmitTheForm = () => {
    setStudents({
      RegNumber: "",
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
      file: "",
    });
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
        <form className="form grid grid-cols-2 gap-8 " onSubmit={handleClick}>
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
              required
              value={students.RegNumber}
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
              required
              placeholder="Title"
              value={students.Title}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Frist Name
            </label>
            <input
              required
              type="text"
              name="FirstName"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Frist Name"
              value={students.FirstName}
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
              required
              placeholder="Last Name"
              value={students.LastName}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Other Name
            </label>
            <input
              type="text"
              required
              name="OtherName"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Other Name"
              value={students.OtherName}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Date Of Birth
            </label>
            <input
              type="date"
              required
              name="DateOfBirth"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Date of Birth"
              value={students.DateOfBirth}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Gender
            </label>
            <input
              type="text"
              name="Gender"
              required
              value={students.Gender}
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
              required
              name="MaritalStatus"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Marital Status"
              value={students.MaritalStatus}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Nationality
            </label>
            <input
              type="text"
              required
              name="Nationality"
              value={students.Nationality}
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
              required
              id="reg"
              value={students.StateOfOrigin}
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
              required
              name="LGA"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="LGA"
              value={students.LGA}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Town Of Origin
            </label>
            <input
              type="text"
              required
              name="TownOfOrigin"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Town Of Origin  "
              value={students.TownOfOrigin}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Address
            </label>
            <input
              required
              type="text"
              name="Address"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Address"
              value={students.Address}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Email
            </label>
            <input
              type="text"
              required
              name="Email"
              value={students.Email}
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
              required
              name="Mobile"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Mobile"
              value={students.Mobile}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Guardian Name
            </label>
            <input
              type="text"
              required
              name="GuardianName"
              id="reg"
              value={students.GuardianName}
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
              required
              name="GuardianNumber"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Guardian Number  "
              value={students.GuardianNumber}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Guardian Address
            </label>
            <input
              type="text"
              required
              name="GuardianAddress"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Guardian Address"
              value={students.GuardianAddress}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Faculty
            </label>
            <input
              type="text"
              required
              name="Faculty"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Faculty"
              value={students.Faculty}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Department
            </label>
            <input
              type="text"
              required
              value={students.Department}
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
              required
              value={students.Level}
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
              required
              value={students.Onleave}
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
              value={students.Onsuspension}
              required
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
              required
              name="Expelled"
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Expelled"
              value={students.Expelled}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Hostel
            </label>
            <input
              type="text"
              name="Hostel"
              required
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Hostel"
              value={students.Hostel}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Off Campus
            </label>
            <input
              type="text"
              name="OffCampus"
              required
              value={students.OffCampus}
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
              required
              value={students.MentorName}
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
              required
              value={students.MentorNumber}
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
              required
              id="reg"
              onChange={handleChange}
              className="my-2 p-2 rounded w-full outline-blue-600"
              value={students.MentorDepartment}
              placeholder="Mentor Department"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Passport
            </label>
            <input
              type="text"
              required
              value={students.Passport}
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
              required
              value={students.Total}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reg" className="font-bold">
              Student profile picture not{" > "}2 MB size
            </label>
            <input
              type="file"
              name="file"
              id="reg"
              onChange={(e) =>
                setStudents((prev) => ({ ...prev, file: e.target.files[0] }))
              }
              className="my-2 p-2 rounded w-full outline-blue-600"
              placeholder="Total"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white font-bold w-full"
          >
            Submit
          </button>
        </form>
        {success && (
          <div className="bg-green-600 p-2 rounded-md my-2 text-white text-center font-bold">
            <h1>Student successfully added into Database🎉🎉🎉 </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateStudents;
