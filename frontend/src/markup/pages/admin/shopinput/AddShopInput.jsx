import React from "react";

// import the auth hook context
import { useAuth } from "../../../../Context/AuthContext";

// import the login component
import LoginForm from "../../../components/LoginForm/LoginForm";

// import the admin menu component
import AdminMenu from "../../../components/Admin/AdminMenu/AdminMenu";

import ShopinputList from "../../../components/Admin/shopinput/AddshopInput";

function Employees() {
  const { isLogged, isAdmin_manager, isAdmin } = useAuth();

  // console.log(useAuth())99

  if (isLogged) {
    return (
      <div>
        <div className="container-fluid admin-pages">
        
         
            <div className="col-md-9 admin-right-side">
              <ShopinputList />
         
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default Employees;
