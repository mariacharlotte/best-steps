import React from "react";
import logo from "../assets/logo_nobg.png";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsPeopleFill,
  BsCurrencyDollar,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = ({ openSidebarToggle }) => {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <ul className="siderbar-lists">
        <Link to="/admin/dashboard" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-items text-black">
            <BsGrid1X2Fill className="icon me-1" />
            Dashboard
          </li>
        </Link>

        <Link to="/admin/Sales" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-items text-black">
            <BsCurrencyDollar className="icon me-1" />
            Sales
          </li>
        </Link>
        <Link to="/admin/Customers" style={{ textDecoration: "none" }}>
          <li className="sidebar-list-items text-black">
            <BsPeopleFill className="icon me-1" />
            Customers
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
