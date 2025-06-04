import React, { useState, useEffect, useRef } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

// import the auth hook
import { useAuth } from "../../../../Context/AuthContext";

// import the employee service to use the get employees function
import SHOPOUTPUT from "../../../../services/shopoutput.services";

////////////////////////////////////////
function EditServices() {
  const navigate = useNavigate();

  const [shop_output_name, setShopoutputName] = useState("");
  const [shop_output_quantity, setShopoutputQuantity] = useState("");
  const [shop_output_price, setShopoutputPrice] = useState("");
  const [customer_name, setShopoutputCustomer] = useState("");
  const [shop_description, setShopdescription] = useState("");
  const [paid, setShoppaid] = useState("");
  // to serve as aflag to show the error message
  const [apiError, setApiError] = useState(false);

  // store the error message
  const [apiErrorMessage, setApiErrorMessage] = useState(null);

  const { shop_output_id } = useParams();
  const [shop_output_code, setShopoutputCode] = useState("");
  const [shop_remark, setShopremark] = useState("");
  const [payment_id, setPayment_id] = useState(1);
  // target

  const shopoutputcodeDom = useRef();
  const shopremarkDom = useRef();
  const shoppaymentDom = useRef();
  // traget
  const shopoutputNameDom = useRef();
  const shopoutputquantityDom = useRef();
  const shopoutputpriceDom = useRef();
  const shopoutputcustomerDom = useRef();
  const shopdescriptionDom = useRef();
  const shoppaidDom = useRef();
  // create a variable to hold the users token
  let loggedInEmployeeToken = "";
  // destructure the auth hook and get the token
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  // shopoutput quantity value tracker

  // shopoutput price value tracker

  function shopoutputCodeTracker() {
    setShopoutputCode(shopoutputcodeDom.current.value);
  }
  // shopoutput price value tracker

  // shopoutput price value tracker

  function shopPaymentTracker() {
    setPayment_id(shoppaymentDom.current.value);
  }
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
  // shopoutput price value tracker

  // shopoutput remark value tracker
  function shopdescriptionTracker() {
    setShopdescription(shopdescriptionDom.current.value);
  }
  // fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await SHOPOUTPUT?.singleShopOutput(
          shop_output_id,
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

        console.log(data.data.singleShopOutput);
        // setServices(data.data.services);

        setShopoutputName(data.data.singleShopOutput[0].shop_output_name);
        setShopoutputQuantity(
          data.data.singleShopOutput[0].shop_output_quantity
        );
        setShopoutputPrice(data.data.singleShopOutput[0].shop_output_price);
        setShopoutputCode(data.data.singleShopOutput[0].shop_output_code);
        setPayment_id(data.data.singleShopOutput[0].payment_id);
        setShopdescription(data.data.singleShopOutput[0].shop_description);

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
      shop_output_name,
      shop_output_quantity,
      shop_output_price,
      shop_output_code,
      payment_id,
      shop_description,
      shop_output_id,
    };

    try {
      const data = await SHOPOUTPUT.updateShopOutput(
        formData,
        loggedInEmployeeToken
      );

      navigate("/houseadmin/houseshopoutputpro");
      setShopoutputName("");
      setShopoutputQuantity("");
      setShopoutputPrice("");
      setShoppaid("");
      setShopoutputCustomer("");
      setShopdescription("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="contact-section pb-5">
        <div className=" bg-white px-5 pt-5 mt-4 contact-title mb-1">
          <h2>Edit Shop Output </h2>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="row clearfix">
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shop_output_name"
                    placeholder="ITEMS"
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
                    placeholder="quantity "
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
                    name="shopoutput_code"
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
                    name="customer_name"
                    placeholder="remark"
                    ref={shopdescriptionDom}
                    onChange={shopdescriptionTracker}
                    value={shop_description}
                    required=""
                  />
                </div>
                <div className="form-group col-md-12">
                  <button class="theme-btn btn-style-one" type="submit">
                    <span>Edit Shop Output</span>
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
