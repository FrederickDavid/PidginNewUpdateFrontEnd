import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirm from "../Auth//Confirm";
import UserSignIn from "../UserSignIn/UserSignIn";
import UserSignUp from "../UserSignIn/UserSignUp";
import AuthRegister from "../Auth/AuthRegister";
import MainView from "../UserFolder/MainView";
import BioFill from "../UserFolder/BioFill";
import Newsfeed from "../UserFolder/Newsfeed";
import AddWord from "../UserFolder/AddWord";
import Dictionary from "../UserFolder/Dictionary";
import Profile from "../UserFolder/Profile";

const DisplayPidgin = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/UserSignIn" element={<UserSignIn />} />
          <Route path="/UserSignUp" element={<UserSignUp />} />
          <Route path="/BioFill" element={<BioFill />} />
          <Route path="/Confirm" element={<Confirm />} />
          <Route path="/auth/:id/:token" element={<AuthRegister />} />
          <Route path="/NewsfeedDashboard" element={<Newsfeed />} />
          <Route path="/AddWord" element={<AddWord />} />
          <Route path="/Dictionary" element={<Dictionary />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default DisplayPidgin;
