import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { AdminPage } from "../pages/Admin/AdminPage";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
export const Admin = () => {
    const token = localStorage.getItem("token");
    const error = sessionStorage.getItem("err");
    if (error) {
      return (
        <Routes>
          <Route path="/notfound" element={<PageNotFound />} />
        </Routes>
      );
    }
    if (token === null) {
      return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to={"/login"} />} />
        </Routes>
      );
    } else {
      return (
        <>
          <Routes>
            <Route path="/" element={<AdminPage />} />
          </Routes>
        </>
      );
    }
};
