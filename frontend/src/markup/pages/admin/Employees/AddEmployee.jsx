import React from "react";
// Import the AddEmployeeForm component
import AddEmployeeForm from "../../../components/Admin/Employees/AddEmployeeForm/AddEmployeeForm";
// Import the AdminMenu component
import AdminMenu from "../../../components/Admin/AdminMenu/AdminMenu";

// import the auth hook context
import { useAuth } from "../../../../Context/AuthContext";

// import the login component
import LoginForm from "../../../components/LoginForm/LoginForm";

function AddEmployee(props) {
  const { isLogged, isAdmin } = useAuth();

  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          <div className="container-fluid admin-pages">
         
              <div className="col-md-9 admin-right-side">
                <AddEmployeeForm />
         
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1 style={{ padding: "100px" }}>
            You don't have the Permission to access the page you request!
          </h1>
        </div>
      );
    }
  } else {
    return (
      <div>
        <h5
          style={{
            color: "red",
            paddingLeft: "320px",
            position: "absolute",
            top: "300px",
          }}
        >
          You must login frist!
        </h5>
        <LoginForm />
      </div>
    );
  }
}

export default AddEmployee;
