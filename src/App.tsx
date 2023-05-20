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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfilePage from "pages/ProfilePage";
import ShoppingCart from "pages/ShoppingCart";
import Product from "pages/Product";

function App() {
  return (
    <>
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
          <Route path='product/:slug' element={<Product />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path='about' element={<AboutPage />} />
            <Route path='Profile' element={<ProfilePage />} />
            <Route path='shoppingCart' element={<ShoppingCart />}></Route>
          </Route>
        </Route>
        <Route path='*' element={<ErrorPage />} />
        <Route path='SignIn' element={<SignIn />} />
        <Route path='SignUP' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
