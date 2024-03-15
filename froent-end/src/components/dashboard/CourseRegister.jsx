import axios from "axios";
import { useEffect, useState } from "react";
import TrackingTable from "./TackingTable";
import CoursesTable from "./CoursesTable";

const CourseRegister = () => {
  const [courses, setCourses] = useState({
    RegNo: "",
    FirstName: "",
    LastName: "",
    Course1: "",
    Course2: "",
    Course3: "",
    Course4: "",
    Course5: "",
    Course6: "",
    Course7: "",
    Course8: "",
    Course9: "",
    Course10: "",
  });
  const handleChange = (e) => {
    setCourses((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/courses", courses);
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // retrieve courses data
  const [coursesRegisters, setCoursesRegisters] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:9000/courses");
        setCoursesRegisters(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, []);
  return (
    <div>
      <div className="bg-[#F5F5F5] rounded-md p-2">
        <div className=" grid grid-cols-3 gap-8 my-2">
          <div className="flex flex-col">
            <label className="font-bold">Reg Number</label>
            <input
              type="text"
              name="RegNo"
              placeholder="RegNoe Code"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">First Name </label>
            <input
              type="text"
              name="FirstName"
              placeholder="First Name  "
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />{" "}
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Last Name </label>
            <input
              type="text"
              name="LastName"
              placeholder="Last Name  "
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Course 1 </label>
            <input
              type="text"
              name="Course1"
              placeholder="Course 1"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Course 2 </label>
            <input
              type="text"
              name="Course2"
              placeholder="Course 2"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Course 3 </label>
            <input
              type="text"
              name="Course3"
              placeholder="Course 3"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Course 4 </label>
            <input
              type="text"
              name="Course4"
              placeholder="Course 4"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Course 5 </label>
            <input
              type="text"
              name="Course5"
              placeholder="Course 5"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Course 6 </label>
            <input
              type="text"
              name="Course6"
              placeholder="Course 6"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Course 7 </label>
            <input
              type="text"
              name="Course7"
              placeholder="Course 7"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Course 8 </label>
            <input
              type="text"
              name="Course8"
              placeholder="Course 8"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Course 9 </label>
            <input
              type="text"
              name="Course9"
              placeholder="Course 9"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Course 10 </label>
            <input
              type="text"
              name="Course10"
              placeholder="Course 10"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
        </div>
        <button
          className="bg-blue-600 p-2 w-full  my-4 text-white rounded-md"
          onClick={handleClick}
        >
          Sumit
        </button>
        <CoursesTable courses={coursesRegisters} />
      </div>
    </div>
  );
};

export default CourseRegister;
