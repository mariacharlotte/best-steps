import React, { useState } from "react";
import "../Admin/App.css";
import { BrowserRouter as Router, Routes, Route,Outlet, Link } from "react-router-dom";


import AdminSidebar from "../Admin/AdminSidebar";



const Admin = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className="grid-container">
      
      <AdminSidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
     
      <Outlet/>
    </div>
  
  );
};

export default Admin;

