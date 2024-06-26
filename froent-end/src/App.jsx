/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/pages/Index";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Loader from "./components/pages/Loader";
import Dashboard from "./components/pages/Dashboard";
import ViewIdCard from "./components/dashboard/ViewIdCard";
import StudentCards from "./components/dashboard/StudentCards";
import DeleteStudent from "./components/dashboard/DeleteStudent";
import CreateStudent from "./components/dashboard/CreateStudent";
import ContactLists from "./components/dashboard/ContactLists"; 
import TakeAttendance from "./components/dashboard/TakeAttendance";
import ViewAttendance from "./components/dashboard/ViewAttendance";
import SMSStudentParents from "./components/dashboard/SMSStudentParents";
import ModifyAttendance from "./components/dashboard/ModifyAttendance";
import CreateStudents from "./components/dashboard/CreateStudents";
import Tracking from "./components/dashboard/Tracking";
import CourseRegister from "./components/dashboard/CourseRegister";
import Users from "./components/dashboard/Users";
import LecturerAdmin from "./components/pages/LecturerAdmin";
import LecturerRegister from "./components/LecturersAdmin/LecturerRegister";
import LecturerLogin from "./components/LecturersAdmin/LecturerLogin";
import ScanStudent from "./components/dashboard/ScanStudent"; 
import UpdateICard from "./components/dashboard/UpdateICard";
const App = () => {
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/prof-portal" element={<LecturerRegister />} />
            <Route
              exact
              path="/admin-dashboard/create-student-id-card/:id"
              element={<UpdateICard />}
            />
            <Route
              exact
              path="/prof-login-portal"
              element={<LecturerLogin />}
            />
            <Route
              exact
              path="/view-id-card-with-qr-code/:id"
              element={<ViewIdCard />}
            />
            <Route exact path="/lecturer-admin" element={<LecturerAdmin />}>
              <Route path="view-attendance" element={<ViewAttendance />} />
              <Route path="take-attendance" element={<TakeAttendance />} />
            </Route>
            <Route path="/admin-dashboard" element={<Dashboard />}>
              <Route path="create-student" element={<CreateStudent />} />
              <Route
                path="delete-student-id-card"
                element={<DeleteStudent />}
              />
              <Route path="students" element={<StudentCards />} />
              <Route path="view-attendance" element={<ViewAttendance />} />
              <Route path="take-attendance" element={<TakeAttendance />} />
              <Route path="register-in-course" element={<CourseRegister />} />
              <Route path="create-new-student" element={<CreateStudents />} />
              <Route path="scan-student" element={<ScanStudent />} />
              <Route path="creact-tracking" element={<Tracking />} />
              <Route path="users" element={<Users />} />
              <Route
                path="sms-student-parent"
                element={<SMSStudentParents />}
              />
              <Route path="contact-list" element={<ContactLists />} />
              <Route path="modify-attendance" element={<ModifyAttendance />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
