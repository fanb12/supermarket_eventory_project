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
import { FaTrashAlt } from "react-icons/fa";
// import the employee service to use the get employees function
import SHOPINPUT from "../../../../services/shopinput.services";
import { AiFillBackward } from "react-icons/ai";
////////////////////////////////////////
function ShopinputList() {
  const navigate = useNavigate();
  const { shop_input_id } = useParams();
  const [shop_input_name, setShopinputName] = useState("");
  const [shop_input_quantity, setShopinputQuantity] = useState("");
  const [shop_input_price, setShopinputPrice] = useState("");
  const [shop_input_code, setShopinputCode] = useState("");
  const [shop_description, setShopDescription] = useState("");
  const [shop_remark, setShopRemark] = useState("");
  const [shopinput, setShopinput] = useState([]);
  //
  const [serverMsg, setServerMsg] = useState("");

  const shopinputNameDom = useRef();
  const shopinputquantityDom = useRef();
  const shopinputpriceDom = useRef();
  const shopinputcodeDom = useRef();
  const shopdescriptionDom = useRef();
  const shopremarkDom = useRef();

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
  function shopinputCodeTracker() {
    setShopinputCode(shopinputcodeDom.current.value);
  }
  //
  function shopdescrptionTracker() {
    setShopDescription(shopdescriptionDom.current.value);
  }
  function shopremarkTracker() {
    setShopRemark(shopremarkDom.current.value);
  }
  // fetch all service data

  const reloadPage = () => {
    window.location.reload();
  };

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
    };
    console.log(formData);
    try {
      const data = await SHOPINPUT.addShopInput(
        formData,
        loggedInEmployeeToken
      );
      if (data.status) {
        setServerMsg("Product added successfully");
        console.log(data.statusText);
        reloadPage();
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function handleDelete(shop_input_id) {
    await SHOPINPUT.deleteShopInput(shop_input_id, loggedInEmployeeToken);
    reloadPage();
    navigate(`/houseadmin/houseshopinputpro`);
  }

  return (
    <>
      <section className="contact-section pb-5">
         <Link to="/houseadmin"><div className="flex ml-5"> <p>Back</p><AiFillBackward size={40} /></div></Link>
        <div className="auto-container px-5 pt-5 mt-4 ">
          <Link to="/houseadmin/houseshopinputpro">
            <button
              style={{
                backgroundColor: "#E5790D",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              View Input product
            </button>
          </Link>
        </div>
        <div className=" bg-white px-5 pt-5 mt-4 contact-title mb-1">
          <h2>Shop Input Product</h2>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="row clearfix">
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shop_input_name"
                    placeholder="Items"
                    ref={shopinputNameDom}
                    onChange={shopinputeNameTracker}
                    value={shop_input_name}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="Shop input quantity"
                    placeholder="Quantity"
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
                    placeholder="Unit Price "
                    ref={shopinputpriceDom}
                    onChange={shopinputPriceTracker}
                    value={shop_input_price}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="shopinput_price"
                    placeholder="code "
                    ref={shopinputcodeDom}
                    onChange={shopinputCodeTracker}
                    value={shop_input_code}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="remark"
                    placeholder="Description"
                    ref={shopdescriptionDom}
                    onChange={shopdescrptionTracker}
                    value={shop_description}
                    required=""
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="remark"
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

export default ShopinputList;
