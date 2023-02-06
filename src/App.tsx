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

function App() {
  return (
    <AuthenticationProvider>
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
