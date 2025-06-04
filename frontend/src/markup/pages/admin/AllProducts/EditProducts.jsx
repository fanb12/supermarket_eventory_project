import React from "react";

// import the auth hook context
import { useAuth } from "../../../../Context/AuthContext";

// import the login component
import LoginForm from "../../../components/LoginForm/LoginForm";

// import the admin menu component
import AdminMenu from "../../../components/Admin/AdminMenu/AdminMenu";

import EmployeesList from "../../../components/Admin/productImage/EditProduct";
function Employees() {
  const { isLogged, isAdmin } = useAuth();

  // console.log(useAuth())

  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          <div className="container-fluid admin-pages">
         
             
              <div className="col-md-12 admin-right-side ">
                <EmployeesList />
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
        <LoginForm />
      </div>
    );
  }
}

export default Employees;
