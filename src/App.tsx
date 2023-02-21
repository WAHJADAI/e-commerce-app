import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import ErrorPage from "pages/ErrorPage";
import Navbar from "components/Navbar";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import PrivateRoute from "components/PrivateRoute";
import AuthenticationProvider from "context/auth";
import clientApi from "config/axiosConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthenticationProvider>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route element={<PrivateRoute />}>
            <Route path='about' element={<AboutPage />} />
          </Route>
        </Route>
        <Route path='*' element={<ErrorPage />} />
        <Route path='SignIn' element={<SignIn />} />
        <Route path='SignUP' element={<SignUp />} />
      </Routes>
    </AuthenticationProvider>
  );
}

export default App;
