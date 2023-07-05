import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import Details from "./components/Details";
import Profile from "./components/Profile";
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/home" Component={Home} />

        <Route path="/sign-up" Component={SignUp} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
