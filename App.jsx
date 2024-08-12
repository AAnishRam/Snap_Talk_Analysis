// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";
import CreateAAccount from "./components/SignUp/CreateAAccount";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Speaking from "./components/Speaking/Speaking";
import SnapTalk from "./components/SnapTalk/SnapTalk";
import Writing from "./components/Writing/Writing";
import Admin from "./components/Admin/Admin";

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
        <Route path="/" element={<SignIn />} />
        <Route path="/navbar" element={<ResponsiveAppBar />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/snap-talk" element={<SnapTalk />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/admin" element={<Admin />} />
        <Route element={<LayoutWithFooter />}>
          <Route path="/layout" element={<Layout />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/signup"
          element={<CreateAAccount></CreateAAccount>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
