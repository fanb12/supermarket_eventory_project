import React, { useState, useEffect, useRef } from "react";
// import recat components
import { Table, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

// import react icons
import { FaEdit } from "react-icons/fa";
// import the date-fns library
import { format } from "date-fns";
// import the auth hook
import { useAuth } from "../../../../Context/AuthContext";

// import the employee service to use the get employees function
import CUSTOMERSTATUS from "../../../../services/Customerstatus.services";
import SHOPOUTPUT from "../../../../services/shopoutput.services";
//import STOREoutput from "../../../../services/";

////////////////////////////////////////
function StoreoutputList() {
  const navigate = useNavigate();
  const [summary, setSummary] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [customer_name, setCustomerName] = useState("");
  const [paid, setPaid] = useState("");
  const [paid_description, setPaiddescription] = useState("");
  const [payment_id, setPayment_id] = useState(1);

  const [customerstatus, setCustomerstatus] = useState([]);

  // target
  const customerNameDom = useRef();
  const customerPaidDom = useRef();
  const PaymentDom = useRef();
  const descriptionDom = useRef();

  // to serve as aflag to show the error message
  const [apiError, setApiError] = useState(false);

  // store the error message
  const [apiErrorMessage, setApiErrorMessage] = useState(null);

  // create a variable to hold the users token
  let loggedInEmployeeToken = "";
  // destructure the auth hook and get the token
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  // storeoutput name value tracker
  function customerNameTracker() {
    setCustomerName(customerNameDom.current.value);
  }

  // storeoutput quantity value tracker
  function customerPaidTracker() {
    setPaid(customerPaidDom.current.value);
  }
  function paymentPaidTracker() {
    setPayment_id(PaymentDom.current.value);
  }
  function descriptionTracker() {
    setPaiddescription(descriptionDom.current.value);
  }
  // storeoutput price value tracker

  // fetch all service data
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state to true

    try {
      const data = await SHOPOUTPUT.getAllShopOutput(loggedInEmployeeToken);
      const { services } = data.data;
      console.log(services);

      const filtering = services.filter(
        ({ added_date }) => startDate === added_date.slice(0, 10)
      );

      setIsLoading(false);
      console.log(filtering);
      const results = filtering.reduce((acc, item) => {
        const {
          shop_output_name,
          shop_output_quantity,
          shop_output_price,
          shop_output_code,
          shop_description,
        } = item;
        const key = shop_output_code;

        const existingItem = acc.find((item) => item.key === key);
        if (existingItem) {
          existingItem.shop_output_quantity += shop_output_quantity;
          existingItem.totalPrice += shop_output_quantity * shop_output_price;
        } else {
          acc.push({
            key,

            shop_output_name,
            shop_output_quantity,
            shop_output_price,
            shop_output_code,
            totalPrice: shop_output_quantity * shop_output_price,
            shop_description,
            added_date: item.added_date.slice(0, 10).split("-").join(", "),
          });
        }
        return acc;
      }, []);

      setSummary(results);
      console.log(results);
      return results;

      // setVehicleError("");

      //Set loading state to false after request completes
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after request completes
    }
  };
  useEffect(() => {}, []);

  // submit handler

  return (
    <>
      <section className="contact-section pb-5">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Sales Report</h2>
          </div>

          <form onSubmit={handleSubmit1}>
            <label style={{ fontSize: "20px" }} htmlFor="startDate">
              Day :
            </label>
            <input
              style={{ marginRight: "50px", fontSize: "20px" }}
              type="date"
              id="startDate"
              value={startDate}
              onChange={handleStartDateChange}
            />

            <button
              style={{
                backgroundColor: "#E5790D",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "in progress..." : "search"}
            </button>

            {summary.length > 0 ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Quantitiy </th>
                    <th>Code </th>

                    <th>Unit Price </th>
                    <th>Description</th>

                    <th> Total Price </th>
                    <th> Date </th>
                  </tr>
                </thead>

                <tbody>
                  {summary.map((product) => (
                    <tr key={product.shop_output_code}>
                      <td>{product.shop_output_name}</td>
                      <td>{product.shop_output_quantity}</td>
                      <td>{product.shop_output_code}</td>
                      <td>{product.shop_output_price}</td>
                      <td>{product.shop_description}</td>
                      <td>{product.totalPrice}</td>
                      {format(new Date(product.added_date), "MM - dd - yyyy ")}
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p>No products available.</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default StoreoutputList;
