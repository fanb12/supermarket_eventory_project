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
import { AiFillBackward } from "react-icons/ai";
// import the employee service to use the get employees function
import SHOPINPUT from "../../../../services/shopinput.services";

////////////////////////////////////////
function ShopinputList() {
  const navigate = useNavigate();

  const [shopinput, setShopinput] = useState([]);

  // create a variable to hold the users token
  let loggedInEmployeeToken = "";
  // destructure the auth hook and get the token
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  // shopinput name value tracker

  // fetch all service data
  async function fetchData() {
    try {
      const data = await SHOPINPUT.getAllShopInput(loggedInEmployeeToken);

      console.log(data.data.product);
      setShopinput(data.data.product);

      // setVehicleError("");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const reloadPage = () => {
    window.location.reload();
  };

  // submit handler

  async function handleDelete(shop_input_id) {
    await SHOPINPUT.deleteShopInput(shop_input_id, loggedInEmployeeToken);
    reloadPage();
    navigate(`/houseadmin/houseshopinputpro`);
  }

  return (
    <>
      <section className="contact-section pb-5">
         <Link to="/houseadmin"><div className="flex ml-5"> <p>Back</p><AiFillBackward size={40} /></div></Link>
        <div className="auto-container">
          <div className="contact-title">
            <h2>Shop Input Products</h2>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Items</th>
                <th>Quantity </th>
                <th>Unit Price </th>
                <th>Code </th>

                <th> Description</th>
                <th> Total Price</th>
                <th>Date </th>
                <th>Edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {shopinput?.map((shopinputs) => (
                <tr key={shopinputs.shop_input_id}>
                  <td>{shopinputs.shop_input_name}</td>
                  <td>{shopinputs.shop_input_quantity}</td>
                  <td>{shopinputs.shop_input_price}</td>
                  <td>{shopinputs.shop_input_code}</td>
                  <td>{shopinputs.shop_description}</td>
                  <td>
                    {shopinputs.shop_input_price *
                      shopinputs.shop_input_quantity}
                  </td>

                  <td>
                    {format(new Date(shopinputs.added_date), "MM - dd - yyyy ")}
                  </td>

                  <td className="edit">
                    <div className="d-flex align-items-center px-4">
                      <Link
                        to={`/houseadmin/houseshopinputs/shopinput-update/${shopinputs.shop_input_id}`}
                      >
                        <FaEdit color="#081336" />
                      </Link>
                    </div>
                  </td>
                  <td className="delete">
                    <span
                      className="hover"
                      onClick={() => handleDelete(shopinputs.shop_input_id)}
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

export default ShopinputList;
