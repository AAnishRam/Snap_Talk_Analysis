// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SignUp_Confirm from "./components/SignUp/SignUp_Confirm";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";

const LayoutWithNavBar = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const LayoutWithFooter = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWithNavBar />}>
          <Route path="/" element={<SignUp_Confirm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route element={<LayoutWithFooter />}>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
