import React, { useState } from "react";
// import the logo image
import logo from "../../../../assets/images/logo.png";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
// import components from react router dom
import { Link } from "react-router-dom";

// import the custom context hook
import { useAuth } from "../../../../Context/AuthContext";

// import the login service to access the logout function
import { logOut } from "../../../../services/login.services";
//import "./heade.css";

function Header() {
  const {
    isLogged,
    setIsLogged,
    employee,
    isAdmin,
    isAdmin_manager_employee,
    isAdmin_Manager,
  } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // console.log(isAdmin_manager_employee);

  // LogOut event handler
  const handleLogOut = () => {
    logOut();

    // set the isLogged state to false
    setIsLogged(false);
  };

  return (
    <div>
      <header className="main-header header-style-one">
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="office-hour">
                  Monday - Saturday 7:00AM - 6:00PM
                </div>
              </div>
              <div className="right-column">
                {isLogged ? (
                  <div className="link-btn">
                    <div className="phone-number">
                      <strong style={{ paddingRight: "10px" }}>
                        Welcome : {employee?.employee_first_name}
                      </strong>
                    </div>
                  </div>
                ) : (
                  <div className="phone-number">
                    Schedule Appointment :
                    <strong style={{ paddingRight: "10px" }}>
                      1800 456 7890
                    </strong>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center p-4">
            <div>
              <Link to="/">
                {/* <img src={logo} alt="" /> */} Teda Super Market
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-14">
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/housecontact">Contact</Link>
              </div>
              {isLogged && (
                <div className="flex gap-5">
                  <Link to="/houseadmin">Admin</Link>
                </div>
              )}

              {isLogged ? (
                <div className="link-btn">
                  <Link
                    to="/"
                    className="theme-btn btn-style-one blue"
                    onClick={handleLogOut}
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                <div className="link-btn">
                  <Link to="/houselogin" className="theme-btn btn-style-one">
                    Login
                  </Link>
                </div>
              )}
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden px-4 py-2 focus:outline-none flex text-7xl font-bold text-green-600 hover:text-green-700 rounded"
            >
              <CiMenuFries size={30} />
            </button>
          </div>

          <div
            className={`md:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ${
              isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-4">
              <div>
                <Link to="/" onClick={toggleMenu}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div
                onClick={toggleMenu}
                className="text-5xl rounded-b-sm hover:text-red-600"
              >
                <IoIosCloseCircleOutline size={25} />
              </div>
            </div>

            <div className="ml-2 mt-3 flex flex-col">
              <div className="hover:text-green-600">
                <Link onClick={toggleMenu} to="/" className="hover:text-green-600">
                  Home
                </Link>
                <hr />
              </div>  
              <div>
                <Link onClick={toggleMenu} to="/housecontact">
                  Contact
                </Link>
                <hr />
              </div>
              {isLogged && (
                <div className="flex gap-5">
                  <Link to="/houseadmin"  onClick={toggleMenu}>Admin</Link>
                  <hr />
                </div>
              )}

              {isLogged ? (
                <div className="">
                  <Link
                    to="/"
                    className="theme-btn btn-style-one blue"
                    onClick={() => {
                      handleLogOut();
                      toggleMenu();
                    }}
                  >
                    Logout
                  </Link>
                  <hr />
                </div>
              ) : (
                <div className="">
                  <Link to="/houselogin" className="theme-btn btn-style-one" onClick={toggleMenu}>
                    Login
                  </Link>
                  <hr />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
