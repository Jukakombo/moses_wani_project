import axios from "axios";
import { useEffect, useState } from "react";
import CourseTable from "./CoursesTable";

const CourseRegister = () => {
  const [success, setSuccess] = useState(false);
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
      const formData = new FormData();
      formData.append("RegNo", courses.RegNo);
      formData.append("FirstName", courses.FirstName);
      formData.append("LastName", courses.LastName);
      formData.append("Course1", courses.Course1);
      formData.append("Course2", courses.Course2);
      formData.append("Course3", courses.Course3);
      formData.append("Course4", courses.Course4);
      formData.append("Course5", courses.Course5);
      formData.append("Course6", courses.Course6);
      formData.append("Course7", courses.Course7);
      formData.append("Course8", courses.Course8);
      formData.append("Course9", courses.Course9);
      formData.append("Course10", courses.Course10);
      await axios
        .post("http://localhost:9000/courses", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          setSuccess(true);
          setTimeout(() => {
            setTimeout(() => {
              setSuccess(false);
              clear();
            }, 3000);
          }, 3000);
        })
        .catch((error) => console.log(error));
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

  const clear = () => {
    setCourses({
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
  };

  return (
    <div>
      <div className="bg-[#F5F5F5] rounded-md p-2">
        <form onSubmit={handleClick} className=" grid grid-cols-3 gap-8 my-2">
          <div className="flex flex-col">
            <label className="font-bold">Reg Number</label>
            <input
              type="text"
              name="RegNo"
              placeholder="RegNoe Code"
              onChange={handleChange}
              value={courses.RegNo}
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
              value={courses.FirstName}
            />{" "}
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Last Name </label>
            <input
              type="text"
              value={courses.LastName}
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
              value={courses.Course1}
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
              value={courses.Course2}
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
              value={courses.Course3}
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Course 4 </label>
            <input
              type="text"
              value={courses.Course4}
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
              value={courses.Course5}
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
              value={courses.Course6}
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
              value={courses.Course7}
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
              value={courses.Course8}
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
              value={courses.Course9}
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
              value={courses.Course10}
              placeholder="Course 10"
              onChange={handleChange}
              className="p-3 rounded-md  outline-blue-600"
              required
            />
          </div>
          <button
            className="bg-blue-600 p-2 w-full  my-4 text-white rounded-md"
            type="submit"
          >
            Sumit
          </button>
          {success && (
            <div className="bg-green-600 p-2 rounded-md text-white text-2xl">
              Successfully Registered in Course 🚀✨🚀✨🚀✨
            </div>
          )}
        </form>
        <CourseTable courses={coursesRegisters} />
      </div>
    </div>
  );
};

export default CourseRegister;
