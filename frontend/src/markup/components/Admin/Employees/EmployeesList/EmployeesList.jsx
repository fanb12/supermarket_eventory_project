import React, { useState, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

// import recat components
import { Table, Button } from "react-bootstrap";

// import react icons
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

// import the auth hook
import { useAuth } from "../../../../../Context/AuthContext";

// import the employee service to use the get employees function
import employeeService from "../../../../../services/employee.services";

// import the date-fns library
import { format } from "date-fns";
import { AiFillBackward } from "react-icons/ai";

////////////////////////////////////////
function EmployeesList() {
  //  employees state to store the emplooyes data
  const [employees, setEmployees] = useState([]);
  const [ddd, setddd] = useState("");

  // console.log(employees);
  // const { id } = useParams();

  const navigate = useNavigate();

  // console.log(employees[0].employee_id)

  // to serve as aflag to show the error message
  const [apiError, setApiError] = useState(false);

  // store the error message
  const [apiErrorMessage, setApiErrorMessage] = useState(null);

  //   get the logged employee token
  const { employee } = useAuth();

  let token = null;

  if (employee) {
    token = employee?.employee_token;
  }
  console.log(employee?.employee_token);

  // fetch employees data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await employeeService?.getAllEmployees(token);
        // console.log(data.status);

        // if (data?.statusText !== "OK") {
        //   // set apiError to true
        //   setApiError(true);

        //   if (data?.status === 403) {
        //     setApiErrorMessage("Please login again");
        //   } else if (data?.status === 401) {
        //     setApiErrorMessage("You are not Authorized to view this page");
        //   } else {
        //     setApiErrorMessage("Please try again laterrrr");
        //   }
        // }

        // set employees data
        setEmployees(data?.data?.employees);

        console.log(data?.data.employees);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchData();
  }, []);

  // handle Delete
  function handleDelete(id) {
    setddd(id);
    console.log(id);
    alert("kkk");
    setTimeout(() => {
      navigate(`/houseadmin/houseemployees`);
    }, 2000);
  }

  function handleEdit(employee_id) {
    navigate(`/houseadmin/houseemployee-update/${employee_id}`);
  }

  return (
    <>
      {apiError ? (
        <section className="contact-section">
           
          <div className="auto-container">
            <div className="contact-title">
              <h2>
                {apiErrorMessage}
                <span style={{ color: "red" }}> ___</span>
              </h2>
            </div>
          </div>
        </section>
      ) : (
        <section className="contact-section">
           <Link to="/houseadmin"><div className="flex ml-5"> <p>Back</p><AiFillBackward size={40} /></div></Link>
          <div className="auto-container">
            <div className="contact-title">
              <h2>የሰራተኞች ዝርዝር</h2>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>የሚሰራ</th>
                  <th> ስም </th>
                  <th> የአባት ስም </th>
                  <th> ኢሜል </th>
                  <th> ስልክ </th>
                  <th>ቀን </th>
                  <th> ሃላፊነት </th>
                  <th>አስተካክል</th>
                  <th>ሰርዝ</th>
                </tr>
              </thead>
              <tbody>
                {employees?.map((employe) => (
                  <tr
                    className={
                      !employe.active_employee ? `${"inactive"}` : `${"active"}`
                    }
                    key={employe.employee_id}
                    onClick={() => handleEdit(employe.employee_id)}
                  >
                    <td>{employe.active_employee ? "Yes" : "No"}</td>
                    <td>{employe.employee_first_name}</td>
                    <td>{employe.employee_last_name}</td>
                    <td>{employe.employee_email}</td>
                    <td>{employe.employee_phone}</td>
                    <td>
                      {format(new Date(employe.added_date), "MM - dd - yyyy ")}
                    </td>
                    <td>{employe.company_role_name}</td>
                    <td className="edit">
                      <span
                        className="hover1"
                        onClick={() => handleEdit(employe.employee_id)}
                      >
                        <FaEdit color="#081336" />
                      </span>
                    </td>
                    <td className="delete">
                      <span
                        className="hover"
                        onClick={() => handleDelete(employe.employee_id)}
                      >
                        <FaTrashAlt color="#DC3545" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      )}
    </>
  );
}

export default EmployeesList;
