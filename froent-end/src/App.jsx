import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { getContacts } from "./actions/contacts";
import { getNews } from "./actions/news";
const App = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
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
            {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}

            <Route path="/view-id-card/:id" exact element={<ViewIdCard />} />
            <Route
              path="/dashboard"
              element={<Dashboard setUser={setUser} user={user} />}
            >
              <Route path="create-student" element={<CreateStudent />} />
              <Route
                path="delete-student-id-card"
                element={<DeleteStudent />}
              />

              <Route path="students" element={<StudentCards />} />
              <Route path="contact-list" element={<ContactLists />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
