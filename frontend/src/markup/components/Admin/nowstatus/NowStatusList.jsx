import React, { useState, useEffect, useRef } from "react";
// import recat components
import { Table, Button } from "react-bootstrap";
// import the auth hook
import { useAuth } from "../../../../Context/AuthContext";

// import the employee service to use the get employees function
import SHOPINPUT from "../../../../services/shopinput.services";
import SHOPOUTPUT from "../../../../services/shopoutput.services";
import { AiFillBackward } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductSummary() {
  const [summary1, setSummary1] = useState([]);
  const [products, setProduct] = useState([]);
  const [summary, setSummary] = useState([]);
  const [output, setOutput] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDate1, setStartDate1] = useState("");
  const [endDate1, setEndDate1] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  let loggedInEmployeeToken = "";
  // destructure the auth hook and get the token
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state to true

    try {
      const data = await SHOPINPUT.getAllShopInput(loggedInEmployeeToken);
      const { product } = data.data;
      console.log(product);

      const filtering = product.filter(
        (product) =>
          startDate <= product.added_date && product.added_date <= endDate
      );

      setProduct(filtering);
      setIsLoading(false);
      console.log(products);

      const processedProducts = Object.values(
        products.reduce((acc, curr) => {
          const { shop_input_code, shop_input_quantity, shop_input_price } =
            curr;
          const key = shop_input_code;
          const foundProduct = acc[key] || {
            shop_input_code,
            shop_input_price,
            totalPrice: 0,
          };
          foundProduct.shop_input_quantity =
            (foundProduct.shop_input_quantity || 0) + shop_input_quantity;
          foundProduct.totalPrice += shop_input_quantity * shop_input_price;
          acc[key] = foundProduct;
          return acc;
        }, {})
      );

      setSummary(processedProducts);
      console.log(processedProducts);
      return processedProducts;
      // setVehicleError("");

      //Set loading state to false after request completes
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after request completes
    }
  };
  const handleStartDateChange1 = (event) => {
    setStartDate1(event.target.value);
  };

  const handleEndDateChange1 = (event) => {
    setEndDate1(event.target.value);
  };

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    setIsLoading1(true); // Set loading state to true
    try {
      const data = await SHOPOUTPUT.getAllShopOutput(loggedInEmployeeToken);
      const { services } = data.data;
      const filtering1 = services.filter(
        (service) =>
          startDate1 <= service.added_date && service.added_date <= endDate1
      );
      console.log(filtering1);
      setSummary1(filtering1);
      const processedProducts = Object.values(
        summary1.reduce((acc, curr) => {
          const { shop_output_code, shop_output_quantity, shop_output_price } =
            curr;
          const key = shop_output_code;
          const foundProduct = acc[key] || {
            shop_output_code,
            shop_output_quantity: 0,
            shop_output_price,
            totalPrice: 0,
          };
          foundProduct.shop_output_quantity += shop_output_quantity;
          foundProduct.totalPrice += shop_output_quantity * shop_output_price;
          acc[key] = foundProduct;
          return acc;
        }, {})
      );

      setOutput(processedProducts);
      console.log(processedProducts);
      console.log(services);
      return processedProducts;

      // setVehicleError("");
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading1(false); // Set loading state to false after request completes
    }
  };

  useEffect(() => {}, []); // Update summary whenever products change

  return (
    <section className="contact-section pb-5">
       <Link to="/houseadmin"><div className="flex ml-5"> <p>Back</p><AiFillBackward size={40} /></div></Link>
      <div className="auto-container">
        <div className="contact-title">
          <h2> Generally Input Product Status</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: "20px" }} htmlFor="startDate">
            From Day:
          </label>
          <input
            style={{ marginRight: "50px", fontSize: "20px" }}
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <label style={{ fontSize: "20px" }} htmlFor="endDate">
            To Day:
          </label>
          <input
            style={{ marginRight: "80px", fontSize: "20px" }}
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
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
            {isLoading ? "is Loading" : "Search"}
          </button>

          {summary.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Items_Code</th>
                  <th>Quantity </th>
                  <th>Unit Price </th>
                  <th> Total Price </th>
                </tr>
              </thead>

              <tbody>
                {summary.map((product) => (
                  <tr key={product.shop_input_code}>
                    <td>{product.shop_input_code}</td>
                    <td>{product.shop_input_quantity}</td>
                    <td>{product.shop_input_price}</td>
                    <td>{product.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No products available.</p>
          )}
        </form>
      </div>
      <div className="auto-container">
        <div className="contact-title">
          <h2>Generally Sales Status</h2>
          <form onSubmit={handleSubmit1}>
            <label style={{ fontSize: "20px" }} htmlFor="startDate">
              From Day:
            </label>
            <input
              style={{ marginRight: "50px", fontSize: "20px" }}
              type="date"
              id="startDate"
              value={startDate1}
              onChange={handleStartDateChange1}
            />
            <label style={{ fontSize: "20px" }} htmlFor="endDate">
              To Day:
            </label>
            <input
              style={{ marginRight: "80px", fontSize: "20px" }}
              type="date"
              id="endDate"
              value={endDate1}
              onChange={handleEndDateChange1}
            />
            <button
              style={{
                backgroundColor: "#E5790D",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
              type="submit"
              disabled={isLoading1}
            >
              {isLoading1 ? "is Loading" : "Search"}
            </button>

            {output.length > 0 ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Items_Code</th>
                    <th>Quantity </th>
                    <th>Unit Price </th>
                    <th> Total Price </th>
                  </tr>
                </thead>

                <tbody>
                  {output.map((product) => (
                    <tr key={product.shop_output_code}>
                      <td>{product.shop_output_code}</td>
                      <td>{product.shop_output_quantity}</td>
                      <td>{product.shop_output_price}</td>
                      <td>{product.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p>No products available.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProductSummary;
