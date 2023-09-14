import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
export const CustomUser = () => {
  const error = sessionStorage.getItem("err");
  if (error) {
    return (
      <Routes>
        <Route path="/notfound" element={<PageNotFound />} />
      </Routes>
    );
  } else {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Navigate to={"/login"} />} />
        </Routes>
      </>
    );
  }
};
