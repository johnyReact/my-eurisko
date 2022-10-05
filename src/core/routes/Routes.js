import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../component/login/Login";
import Header from "../../component/header/Header";
import ProtectedRoutes from "./ProtectedRoutes";
import PageNotFound from "../../component/page-not-found/PageNotFound";
import Dashboard from "../../component/dashboard/Dashboard";
import Error from "../../component/error/Error";
export default function Routers() {
  return (
    <BrowserRouter>
      <Header log={true} />
      <div className="app-container">
        <Routes>
          <Route element={<ProtectedRoutes shouldbeloggedIn={false} />}>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoutes shouldbeloggedIn={true} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
