import React, { useState, useEffect, useRef } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

// import the auth hook
import { useAuth } from "../../../../Context/AuthContext";

// import the employee service to use the get employees function
import SHOPINPUT from "../../../../services/shopinput.services";

////////////////////////////////////////
function EditServices() {
  const navigate = useNavigate();

  const [shop_input_code, setShopinputCode] = useState("");
  const [shop_remark, setShopRemark] = useState("");
  const [shop_input_name, setShopinputName] = useState("");
  const [shop_input_quantity, setShopinputQuantity] = useState("");
  const [shop_input_price, setShopinputPrice] = useState("");
  const [shop_description, setShopdescription] = useState("");

  // to serve as aflag to show the error message
  const [apiError, setApiError] = useState(false);

  // store the error message
  const [apiErrorMessage, setApiErrorMessage] = useState(null);

  const { shop_input_id } = useParams();

  // traget
  const shopinputNameDom = useRef();
  const shopinputquantityDom = useRef();
  const shopinputpriceDom = useRef();
  const shopdescriptionDom = useRef();
  const shopinputcodeDom = useRef();
  const shopremarkDom = useRef();
  // create a variable to hold the users token
  let loggedInEmployeeToken = "";
  // destructure the auth hook and get the token
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  function shopinputCodeTracker() {
    setShopinputCode(shopinputcodeDom.current.value);
  }
  //

  function shopremarkTracker() {
    setShopRemark(shopremarkDom.current.value);
  }
  // shopinput name value tracker
  function shopinputeNameTracker() {
    setShopinputName(shopinputNameDom.current.value);
  }

  // shopinput quantity value tracker
  function shopinputQuantityTracker() {
    setShopinputQuantity(shopinputquantityDom.current.value);
  }
  // shopinput price value tracker
  function shopinputPriceTracker() {
    setShopinputPrice(shopinputpriceDom.current.value);
  }
  // shopinput descrtion value tracker
  function shopdescriptionTracker() {
    setShopdescription(shopdescriptionDom.current.value);
  }

  // fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await SHOPINPUT?.singleShopInput(
          shop_input_id,
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

        console.log(data.data.singleShopInput);
        // setServices(data.data.services);

        setShopinputName(data.data.singleShopInput[0].shop_input_name);
        setShopinputQuantity(data.data.singleShopInput[0].shop_input_quantity);
        setShopinputPrice(data.data.singleShopInput[0].shop_input_price);
        setShopinputCode(data.data.singleShopInput[0].shop_input_code);
        setShopdescription(data.data.singleShopInput[0].shop_description);
        setShopRemark(data.data.singleShopInput[0].shop_remark);

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
      shop_input_name,
      shop_input_quantity,
      shop_input_price,
      shop_input_code,
      shop_description,
      shop_remark,
      shop_input_id,
    };

    try {
      const data = await SHOPINPUT.updateShopInput(
        formData,
        loggedInEmployeeToken
      );

      navigate("/houseadmin/houseshopinputpro");
      setShopinputName("");
      setShopinputQuantity("");
      setShopinputPrice("");
      setShopinputCode("");
      setShopdescription("");
      setShopRemark("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="contact-section pb-5">
        <div className=" bg-white px-5 pt-5 mt-4 contact-title mb-1">
          <h2>Edit Shop Input </h2>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="row clearfix">
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shop_input_name"
                    placeholder="Items Name"
                    ref={shopinputNameDom}
                    onChange={shopinputeNameTracker}
                    value={shop_input_name}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shop_input_quantity"
                    placeholder="quantity"
                    ref={shopinputquantityDom}
                    onChange={shopinputQuantityTracker}
                    value={shop_input_quantity}
                    required
                  />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shopinput_price"
                    placeholder="Unit Price"
                    ref={shopinputpriceDom}
                    onChange={shopinputPriceTracker}
                    value={shop_input_price}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shopinput_code"
                    placeholder="item code"
                    ref={shopinputcodeDom}
                    onChange={shopinputCodeTracker}
                    value={shop_input_code}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shop_input_quantity"
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
                    name="shop_input_quantity"
                    placeholder="Remark"
                    ref={shopremarkDom}
                    onChange={shopremarkTracker}
                    value={shop_remark}
                    required=""
                  />
                </div>
                <div className="form-group col-md-12">
                  <button class="theme-btn btn-style-one" type="submit">
                    <span>Edit Shop Input </span>
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
