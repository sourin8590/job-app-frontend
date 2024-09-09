import React, { useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Jobs from "./components/job/Jobs";
import JobDetails from "./components/job/JobDetails";
import MyJobs from "./components/job/MyJobs";
import PostJob from "./components/job/PostJob";
import Application from "./components/applications/Application";
import MyApplication from "./components/applications/MyApplication";
import NotFound from "./components/notFound/NotFound";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/layout/Navbar";

const App = () => {
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://job-app-backend-s2q3.onrender.com/api/v1/user/getuser",
          { withCredentials: true }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/job/getall" element={<Jobs />}></Route>
          <Route path="/job/:id" element={<JobDetails />}></Route>
          <Route path="/job/post" element={<PostJob />}></Route>
          <Route path="/job/me" element={<MyJobs />}></Route>
          <Route path="/application/:id" element={<Application />}></Route>
          <Route path="/application/me" element={<MyApplication />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </>
  );
};

export default App;
