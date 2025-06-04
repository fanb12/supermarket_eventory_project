import React, { useState, useEffect, useRef } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

// import the auth hook
import { useAuth } from "../../../../Context/AuthContext";

// import the employee service to use the get employees function
import CUSTOMERSTATUS from "../../../../services/Customerstatus.services";

////////////////////////////////////////9
function EditServices() {
  const navigate = useNavigate();

  const [customer_name, setCustomerName] = useState("");
  const [paid, setPaid] = useState("");
  const [payment_id, setPayment_id] = useState(1);
  const [paid_description, setPaid_description] = useState("");

  const [customerstatus, setcustomerstatus] = useState([]);

  // to serve as aflag to show the error message
  const [apiError, setApiError] = useState(false);

  // store the error message
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const { status_id } = useParams();
  // traget
  const customerNameDom = useRef();
  const paidDom = useRef();
  const payment_idDom = useRef();
  const paid_descriptionom = useRef();

  // create a variable to hold the users token
  let loggedInEmployeeToken = "";
  // destructure the auth hook and get the token
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  // customerstatus name value tracker
  function customerNameTracker() {
    setCustomerName(customerNameDom.current.value);
  }
  function customerPymentTracker() {
    setPayment_id(payment_idDom.current.value);
  }
  function customerRemarkTracker() {
    setPaid_description(paid_descriptionom.current.value);
  }
  // customerstatus quantity value tracker
  function customerPaidTracker() {
    setPaid(paidDom.current.value);
  }

  // fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await CUSTOMERSTATUS?.singleCustomerStatus(
          status_id,
          loggedInEmployeeToken
        );
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

        //console.log(data.data.singleCustomerStatus);
        // setServices(data.data.services);

        setCustomerName(data.data.singleCustomerStatus[0].customer_name);
        setPaid(data.data.singleCustomerStatus[0].paid);

        // setVehicleError("");
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // submit handler
  async function handleSubmit(e) {
    // prevent the default behavior of the form submission
    e.preventDefault();

    // prepare the data for form submission
    const formData = {
      customer_name,
      paid,
      payment_id,
      paid_description,
      status_id,
    };

    try {
      const data = await CUSTOMERSTATUS.updateCustomerStatus(
        formData,
        loggedInEmployeeToken
      );

      navigate("/admin/customerstatus/payment");
      setCustomerName("");
      setPaid("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="contact-section pb-5">
        <div className=" bg-white px-5 pt-5 mt-4 contact-title mb-1">
          <h2>አስተካክል: የደንበኛ ሁኔታ </h2>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="row clearfix">
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="customer name"
                    placeholder="የደንበኛ ስም"
                    ref={customerNameDom}
                    onChange={customerNameTracker}
                    value={customer_name}
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="paid"
                    placeholder="የተከፈለ ገንዘብ"
                    ref={paidDom}
                    onChange={customerPaidTracker}
                    value={paid}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <select
                    name="ways of payment"
                    className="custom-select-box"
                    ref={payment_idDom}
                    value={payment_id}
                    onChange={customerPymentTracker}
                    required
                  >
                    <option value="1">ባንክ </option>
                    <option value="2">ካሽ </option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="paid_description"
                    placeholder="የተከፈለበት መንገድ"
                    ref={paid_descriptionom}
                    onChange={customerRemarkTracker}
                    value={paid_description}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <button class="theme-btn btn-style-one" type="submit">
                    <span>አስተካክል የደንበኛ ክፍያ </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditServices;
