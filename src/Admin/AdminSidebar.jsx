import React from "react";
import logo from "../assets/logo_nobg.png";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsPeopleFill,
  BsCurrencyDollar,
} from "react-icons/bs";
import{Link }from 'react-router-dom'

const Sidebar = ({ openSidebarToggle }) => {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      
      <ul className="siderbar-lists">
        <li className="sidebar-list-items">
          <Link to="/admin/dashboard">
            <BsGrid1X2Fill className="icon me-1" />
            Dashboard
          </Link>
        </li>
        <li className="sidebar-list-items">
          <Link to="/admin/Sales">
            <BsCurrencyDollar className="icon me-1" />
            Sales
          </Link>
        </li>
        <li className="sidebar-list-items">
          <Link to="/admin/Customers">
            <BsPeopleFill className="icon me-1" />
            Customers
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
