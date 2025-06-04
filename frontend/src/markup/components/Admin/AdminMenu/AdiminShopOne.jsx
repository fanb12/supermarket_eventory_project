import React from "react";

import { Link } from "react-router-dom";

function AdminMenu(props) {
  return (
    <div>
      <div className="admin-menu">
        <h2>Admin Menu</h2>
      </div>
      <div className="list-group">
        <Link to="/admin" className="list-group-item">
          Dashboard
        </Link>

        <Link to="/admin/add-employee" className="list-group-item">
          Add employee
        </Link>
        <Link to="/admin/employees" className="list-group-item">
          Employees
        </Link>

        <Link to="/admin/shopinputpro" className="list-group-item">
          {" "}
          Shop Input Products
        </Link>

        <Link to="/admin/shopoutputpro" className="list-group-item">
          {" "}
          Shop Output Products
        </Link>

        <Link to="/admin/customerstatuspro" className="list-group-item">
          {" "}
          Customer Status
        </Link>
        <Link to="/admin/nowstatus" className="list-group-item">
          Shop Status
        </Link>

        <Link to="/admin/allshopstatus" className="list-group-item">
          All Shop Status
        </Link>
        <Link to="/admin" className="list-group-item">
          Store
        </Link>
        <Link to="/admin/productionpro" className="list-group-item">
          Production
        </Link>
      </div>
    </div>
  );
}

export default AdminMenu;
