import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { Bookmarks } from "../pages/Bookmarks/Bookmarks";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { Settings } from "../pages/Settings/Settings";
import { SinglePost } from "../pages/SinglePost/SinglePost";
export const User = () => {
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
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="settings" element={<Settings />} />
          <Route path="post/:id" element={<SinglePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Navigate to={"/notfound"} />} />
        </Routes>
      </>
    );
  }
};
