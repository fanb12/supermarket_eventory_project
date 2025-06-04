import React, { useState, useEffect, useRef } from "react";
// import recat components
import { Table, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

// import react icons
import { FaEdit } from "react-icons/fa";
// import the date-fns library
import { daysToWeeks, format, set } from "date-fns";
// import the auth hook
import { useAuth } from "../../../../Context/AuthContext";
import { FaTrashAlt } from "react-icons/fa";
// import the employee service to use the get employees function
import SHOPOUTPUT from "../../../../services/shopoutput.services";
import shopinputservice from "../../../../services/shopinput.services";
import { AiFillBackward } from "react-icons/ai";

////////////////////////////////////////
function ShopoutputList() {
  const navigate = useNavigate();

  const [shop_output_name, setShopoutputName] = useState("");
  // const [shop_input_id, setShopinpt_id] = useState("");
  const [serverMsg, setServerMsg] = useState("");
  const [shop_output_quantity, setShopoutputQuantity] = useState("");
  const [shop_output_price, setShopoutputPrice] = useState("");
  const [shop_output_code, setShopoutputCode] = useState("");
  const [shop_description, setShopdescription] = useState("");
  const [shop_remark, setShopremark] = useState("");
  const [payment_id, setPayment_id] = useState(1);
  // target
  const shopoutputNameDom = useRef();
  const shopoutputquantityDom = useRef();
  const shopoutputpriceDom = useRef();
  const shopoutputcodeDom = useRef();
  const shopdescriptionDom = useRef();
  const shopremarkDom = useRef();
  const shoppaymentDom = useRef();

  //const shopoutputidDom = useRef();

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
  const { isLogged, isAdmin, isAdmin_Manager } = useAuth();
  // shopoutput name value tracker
  function shopoutputeNameTracker() {
    setShopoutputName(shopoutputNameDom.current.value);
  }

  // shopoutput quantity value tracker
  function shopoutputQuantityTracker() {
    setShopoutputQuantity(shopoutputquantityDom.current.value);
  }
  // shopoutput price value tracker
  function shopoutputPriceTracker() {
    setShopoutputPrice(shopoutputpriceDom.current.value);
  }
  function shopoutputCodeTracker() {
    setShopoutputCode(shopoutputcodeDom.current.value);
  }
  // shopoutput price value tracker

  // shopoutput price value tracker
  function shopdescriptionTracker() {
    setShopdescription(shopdescriptionDom.current.value);
  }
  function shopremarkTracker() {
    setShopremark(shopremarkDom.current.value);
  }
  function shopPaymentTracker() {
    setPayment_id(shoppaymentDom.current.value);
  }

  // function shopoutputIdTracker() {
  //   setShopinpt_id(shopoutputidDom.current.value);
  // }
  // fetch all service data

  //console.log(shopoutput);
  //console.log(paids);
  // submit handler  const reloadPage = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  async function handleSubmit(e) {
    // prevent the default behavior of the form submission
    e.preventDefault();

    // prepare the data for form submission
    const formData = {
      shop_output_name,
      shop_output_quantity,
      shop_output_price,
      shop_output_code,
      payment_id,
      shop_description,
      shop_remark,
    };
    console.log(formData);
    try {
      const data = await SHOPOUTPUT.addShopOutput(
        formData,
        loggedInEmployeeToken
      );
      if (data.status) {
        setServerMsg("Product added successfully");
        reloadPage();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="contact-section pb-5">
         <Link to="/houseadmin"><div className="flex ml-5"> <p>Back</p><AiFillBackward size={40} /></div></Link>
        <div className="auto-container px-5 pt-5 mt-4 ">
          <Link to="/houseadmin/ShopOutput">
            <button
              style={{
                backgroundColor: "#E5790D",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              View Output product
            </button>
          </Link>
        </div>
        <div className=" bg-white px-5 pt-5 mt-4 contact-title mb-1">
          <h2>Add Shop Output</h2>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="row clearfix">
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shop_output_name"
                    placeholder="items"
                    ref={shopoutputNameDom}
                    onChange={shopoutputeNameTracker}
                    value={shop_output_name}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shop_output_quantity"
                    placeholder="Quantitiy "
                    ref={shopoutputquantityDom}
                    onChange={shopoutputQuantityTracker}
                    value={shop_output_quantity}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shopoutput_price"
                    placeholder="Unit Price"
                    ref={shopoutputpriceDom}
                    onChange={shopoutputPriceTracker}
                    value={shop_output_price}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shopoutput_price"
                    placeholder="Code"
                    ref={shopoutputcodeDom}
                    onChange={shopoutputCodeTracker}
                    value={shop_output_code}
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <select
                    name="payment_ways"
                    className="custom-select-box"
                    ref={shoppaymentDom}
                    value={payment_id}
                    onChange={shopPaymentTracker}
                    required
                  >
                    <option value="1">Transfer </option>
                    <option value="2">Cash </option>
                  </select>
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="Remark"
                    placeholder="Description"
                    ref={shopdescriptionDom}
                    onChange={shopdescriptionTracker}
                    value={shop_description}
                    required=""
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="Remark"
                    placeholder="Remark"
                    ref={shopremarkDom}
                    onChange={shopremarkTracker}
                    value={shop_remark}
                    required=""
                  />
                </div>
                <div className="form-group col-md-12">
                  <button className="theme-btn btn-style-one" type="submit">
                    <span>Submit</span>
                  </button>
                  {serverMsg && (
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
                      {serverMsg}{" "}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShopoutputList;
