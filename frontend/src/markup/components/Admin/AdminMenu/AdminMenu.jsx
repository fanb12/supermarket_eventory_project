import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import "./custom.css";

function AdminMenu(props) {
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative h-lvw ">
      <div 
        onClick={toggleMenu} 
        className="pt-4 bg-white text-green-600 rounded flex">
      <p>All</p>  <CiMenuFries size={30} />
      </div>
      <div
        className={`fixed top-3/12 left-0 w-72 h-full bg-white transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
      >
        <div className="admin flex justify-between  ">
          <p className=" text-4xl font-bold pl-4 ">Admin</p>
          <button onClick={toggleMenu} className="text-xl">&times;</button>
        </div>
        <ul className="pl-4">
          <li className="">
            <Link to="/houseadmin/houseadd-employee" className="text-sm md:text-lg" onClick={toggleMenu}>
              Add Employee
            </Link>
          </li>
          <hr />
          <li className="text-base">
            <Link to="/houseadmin/houseemployees" className="" onClick={toggleMenu}>
              Employees
            </Link>
          </li>
          <hr />
          <li className="text-base">
            <Link to="/houseadmin/houseAploadImage" className="" onClick={toggleMenu}>
              Upload Image
            </Link>
          </li>
          <hr />
          <li className="text-base">
            <Link to="/houseadmin/houseaddshopinput" className="" onClick={toggleMenu}>
              Shop Input Products
            </Link>
          </li>
          <hr />
          <li className="text-base">
            <Link to="/houseadmin/houseAddshopoutput" className="" onClick={toggleMenu}>
              Shop Output Products
            </Link>
          </li>
          <hr />
          <li className="text-base">
            <Link to="/houseadmin/housenowstatus" className="" onClick={toggleMenu}>
              Sales & Input Status
            </Link>
          </li>
          <hr />
          <li className="text-base">
            <Link to="/houseadmin/houseallshopstatus" className="" onClick={toggleMenu}>
              Stock Status
            </Link>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
}

export default AdminMenu;
