import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import ErrorPage from "pages/ErrorPage";
import Navbar from "components/Navbar";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
        <Route path='SignIn' element={<SignIn />} />
        <Route path='SignUP' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
