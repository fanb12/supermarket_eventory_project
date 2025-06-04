import React from "react";
// Import the AddEmployeeForm component
import AdminDashBoardForm from "../../../pages/admin/AllProducts/FinalImage";
// Import the AdminMenu component
import AdminMenu from "../../../components/Admin/AdminMenu/AdminMenu";

function AddEmployee(props) {
  return (
    <div>
      <div className="container-fluid ">
        <div className="flex justify-between c">
          <div className="col-3 sm:col-start-1">
            <AdminMenu />
          </div>
          <div className="col-9 sm:col-end-10">
            <AdminDashBoardForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
