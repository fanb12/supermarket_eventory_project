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

  const [shopoutput, setShopoutput] = useState([]);
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

  // shopoutput name value tracker

  // function shopoutputIdTracker() {
  //   setShopinpt_id(shopoutputidDom.current.value);
  // }
  // fetch all service data
  async function fetchData() {
    try {
      const data = await SHOPOUTPUT.getAllShopOutput(loggedInEmployeeToken);
      const { services } = data.data;

      setShopoutput(services);
      return services;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  //console.log(shopoutput);
  //console.log(paids);
  // submit handler

  const reloadPage = () => {
    window.location.reload();
  };
  async function handleDelete(shop_output_id) {
    await SHOPOUTPUT.deleteShopOutput(shop_output_id, loggedInEmployeeToken);
    reloadPage();
    navigate(`/houseadmin/houseshopoutputpro`);
  }
  return (
    <>
      <section className="contact-section pb-5">
         <Link to="/houseadmin"><div className="flex ml-5"> <p>Back</p><AiFillBackward size={40} /></div></Link>
        <div className="auto-container">
          <div className="contact-title">
            <h2>Shop Output Products</h2>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>items</th>
                <th> Quantity </th>
                <th>Unit Price </th>

                <th>Code </th>
                <th>Way of Payment </th>
                <th> Total Price </th>

                <th> Description </th>
                <th> Date </th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {shopoutput?.map((shopoutputs) => (
                <tr key={shopoutputs.shop_output_id}>
                  <td>{shopoutputs.shop_output_name}</td>
                  <td>{shopoutputs.shop_output_quantity}</td>
                  <td>{shopoutputs.shop_output_price}</td>
                  <td>{shopoutputs.shop_output_code}</td>
                  <td>{shopoutputs.payment_name}</td>
                  <td>
                    {shopoutputs.shop_output_price *
                      shopoutputs.shop_output_quantity}
                  </td>
                  <td>{shopoutputs.shop_description}</td>
                  <td>
                    {format(
                      new Date(shopoutputs.added_date),
                      "MM - dd - yyyy "
                    )}
                  </td>

                  <td className="edit">
                    <div className="d-flex align-items-center px-4">
                      <Link
                        to={`/houseadmin/houseshopoutputs/shopoutput-update/${shopoutputs.shop_output_id}`}
                      >
                        <FaEdit color="#081336" />
                      </Link>
                    </div>
                  </td>
                  <td className="delete">
                    <span
                      className="hover"
                      onClick={() => handleDelete(shopoutputs.shop_output_id)}
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
    </>
  );
}

export default ShopoutputList;
