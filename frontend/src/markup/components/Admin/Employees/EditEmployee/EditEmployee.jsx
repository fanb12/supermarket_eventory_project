import React, { useRef, useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

// import employee service
import employeeService from "../../../../../services/employee.services";

// import the useAuth hook
import { useAuth } from "../../../../../Context/AuthContext";

// import react router dom
import { useParams, useNavigate } from "react-router-dom";

function EditEmployee() {
  const navigate = useNavigate();
  const [employee_first_name, setFirstName] = useState("");
  const [employee_last_name, setLastName] = useState("");
  const [employee_phone, setPhoneNumber] = useState("");
  const [company_role_id, setCompany_role_id] = useState(1);
  const [active_employee, setActiveEmployee] = useState("");
  const [employee1, setEmployee1] = useState("");

  // console.log(active_employee);

  const { employee_id } = useParams();

  // console.log(employee_first_name);
  // console.log(employee_last_name);
  // console.log(employee_phone);
  // console.log(company_role_id);

  // traget
  const firstNameDom = useRef();
  const lastNameDom = useRef();
  const phoneNumberDom = useRef();
  const companyRoleIdDom = useRef();
  const checkboxDOM = useRef();

  // console.log(checkboxDOM.current)

  // create a variable to hold the users token
  let loggedInEmployeeToken = "";
  // destructure the auth hook and get the token
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  // first name value tracker
  function firstNameTracker() {
    setFirstName(firstNameDom.current.value);
  }

  // last name value tracker
  function lastNameTracker() {
    setLastName(lastNameDom.current.value);
  }

  // phone number value tracker
  function phoneNumberTracker() {
    setPhoneNumber(phoneNumberDom.current.value);
  }

  // company role id value tracker
  function companyRoleIdTracker() {
    setCompany_role_id(companyRoleIdDom.current.value);
  }

  // active employee value tracker
  function activeEmployeeTracker() {
    setActiveEmployee(checkboxDOM.current.checked);
  }

  // fetch employee data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      // console.log(formData);
      try {
        const data = await employeeService?.singleEmployee(
          employee_id,
          loggedInEmployeeToken
        );
        // console.log(data.data.singleEmployee[0]);
        // console.log(data.data.singleEmployee[0].company_role_id);

        if (data?.statusText !== "OK") {
          // set apiError to true
          setApiError(true);

          if (data?.status === 403) {
            setApiErrorMessage("Please login again");
          } else if (data?.status === 401) {
            setApiErrorMessage("You are not Authorized to view this page");
          } else {
            setApiErrorMessage("Please try again laterrrr");
          }
        }
        setFirstName(data.data.singleEmployee[0].employee_first_name);
        setLastName(data.data.singleEmployee[0].employee_last_name);
        setPhoneNumber(data.data.singleEmployee[0].employee_phone);
        setCompany_role_id(data.data.singleEmployee[0].company_role_id);
        setEmployee1(data.data.singleEmployee[0]);
        checkboxDOM.current.checked =
          data.data.singleEmployee[0].active_employee;
        setActiveEmployee(checkboxDOM.current.checked);
        // set employees data
        // setEmployees(data?.data?.employees);

        // console.log(checkboxDOM.current.checked);
      } catch (error) {
        // console.log(error);
      }
    };
    // console.log(employee_first_name);
    fetchData();
  }, []);

  // console.log(employee_first_name)
  async function handleSubmit(e) {
    // prevent the default behavior of the form submission
    e.preventDefault();

    // prepare the data for form submission
    const FormData = {
      employee_first_name,
      employee_last_name,
      employee_phone,
      company_role_id,
      active_employee,
      employee_id,
    };

    try {
      const data = await employeeService.updateEmployee(
        FormData,
        loggedInEmployeeToken
      );

      navigate("/houseadmin/houseemployees");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>አስተካክል: {employee1.employee_email} </h2>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-7">
              <div className="inner-column">
                <div className="contact-form">
                  {/* Form Start*/}

                  <form onSubmit={handleSubmit}>
                    <div className="row clearfix">
                      {/* First Name */}
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="employee_first_name"
                          placeholder="የሰራተኛ ስም "
                          ref={firstNameDom}
                          value={employee_first_name}
                          onChange={firstNameTracker}
                          required
                        />
                        {"firstNameRequired" && (
                          <div className="validation-error" role="alert">
                            {/* {firstNameRequired} */}
                          </div>
                        )}
                      </div>

                      {/* Last Name */}
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="employee_last_name"
                          placeholder="የአባት ስም "
                          required
                          ref={lastNameDom}
                          value={employee_last_name}
                          onChange={lastNameTracker}
                        />
                        {"lastNameRequired" && (
                          <div className="validation-error" role="alert">
                            {/* {lastNameRequired} */}
                          </div>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="employee_phone"
                          placeholder="ስልክ ቁጥር "
                          ref={phoneNumberDom}
                          required
                          value={employee_phone}
                          onChange={phoneNumberTracker}
                        />
                        {"phoneNumberRequired" && (
                          <div className="validation-error" role="alert">
                            {/* {phoneNumberRequired} */}
                          </div>
                        )}
                      </div>

                      {/* Employee Role */}
                      <div className="form-group col-md-12">
                        <select
                          name="employee_role"
                          className="custom-select-box"
                          ref={companyRoleIdDom}
                          value={company_role_id}
                          onChange={companyRoleIdTracker}
                          required
                        >
                          <option value="1">Employee</option>
                          <option value="2">Manager</option>
                          <option value="3">Admin</option>
                        </select>
                      </div>

                      <div className="form-group col-md-12 form-contro">
                        <h5 htmlFor="completed">የሚሰራ የሰራተኛ</h5>

                        <input
                          value={active_employee}
                          onChange={activeEmployeeTracker}
                          ref={checkboxDOM}
                          type="checkbox"
                          name="completed"
                          className=""
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="form-group col-md-12">
                        <button
                          // onClick={spinner}
                          className="theme-btn btn-style-one"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span>
                            {!"spin" ? (
                              <BeatLoader color="white" size={8} />
                            ) : (
                              "አስተካክል ሰራተኛ"
                            )}
                          </span>
                        </button>
                        {"serverMsg" && (
                          <div
                            className="validation-error"
                            style={{
                              color: "green",
                              fontSize: "100%",
                              fontWeight: "600",
                              padding: "25px",
                            }}
                            role="alert"
                          >
                            {/* {serverMsg} */}
                          </div>
                        )}
                      </div>
                    </div>
                  </form>

                  {/* Form End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditEmployee;
