import React, { useState, useEffect, useRef } from "react";
// import recat components
import { Table, Button } from "react-bootstrap";
// import the auth hook
import { useAuth } from "../../../../Context/AuthContext";
import { AiFillBackward } from "react-icons/ai";
import { Link } from "react-router-dom";

// import the employee service to use the get employees function
import SHOPINPUT from "../../../../services/shopinput.services";
import SHOPOUTPUT from "../../../../services/shopoutput.services";

function ProductSummary() {
  const [summary, setSummary] = useState([]);
  const [summary1, setSummary1] = useState([]);
  const [products, setProduct] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
      const serviceName = product.reduce((map, service) => {
        if (!map[service.shop_input_code]) {
          map[service.shop_input_code] = {
            shop_input_code: service.shop_input_code,
            shop_input_quantity: 0,
            shop_input_name: service.shop_input_name,
            shop_description: service.shop_description,
            other_data: service, // You can add other properties here if needed
          };
        }
        map[service.shop_input_code].shop_input_quantity +=
          service.shop_input_quantity;
        return map;
      }, {});

      const filtering = serviceName[startDate] ? [serviceName[startDate]] : [];

      setProduct(filtering);
      setIsLoading(false);
      console.log(filtering);
      const data1 = await SHOPOUTPUT.getAllShopOutput(loggedInEmployeeToken);
      const { services } = data1.data;
      console.log(services);
      const serviceNameMap = services.reduce((mapp, servic) => {
        if (!mapp[servic.shop_output_code]) {
          mapp[servic.shop_output_code] = {
            shop_output_code: servic.shop_output_code,
            shop_output_quantity: 0,
            shop_description: servic.shop_description,
            shop_output_name: servic.shop_output_name,
            other: servic, // You can add other properties here if needed
          };
        }
        mapp[servic.shop_output_code].shop_output_quantity +=
          servic.shop_output_quantity;
        return mapp;
      }, {});
      const filtering1 = serviceNameMap[startDate]
        ? [serviceNameMap[startDate]]
        : [];
      console.log(filtering1);
      setSummary1(filtering1);
      const processedProducts = filtering.reduce((acc, curr) => {
        const { shop_input_code, shop_input_quantity } = curr;
        const existingProduct = acc.find(
          (product) => product.shop_input_code === shop_input_code
        );

        if (existingProduct) {
          existingProduct.shop_input_quantity += shop_input_quantity;
        } else {
          acc.push({ shop_input_code, shop_input_quantity });
        }
        return acc;
      }, []);
      console.log(processedProducts);
      const processedProducts1 = filtering1.reduce((acc, curr) => {
        const { shop_output_code, shop_output_quantity } = curr;
        const existingProduct = acc.find(
          (product) => product.shop_output_code === shop_output_code
        );
        if (existingProduct) {
          existingProduct.shop_output_quantity += shop_output_quantity;
        } else {
          acc.push({
            shop_output_code,
            shop_output_quantity,
          });
        }
        return acc;
      }, []);

      const results = processedProducts.reduce((acc, curr) => {
        const { shop_input_code, shop_input_quantity } = curr;
        acc[shop_input_code] =
          (acc[shop_input_code] || 0) + shop_input_quantity;
        return acc;
      }, {});

      processedProducts1.forEach((product) => {
        const { shop_output_code, shop_output_quantity } = product;
        if (results.hasOwnProperty(shop_output_code)) {
          results[shop_output_code] -= shop_output_quantity;
        } else {
          results[shop_output_code] = -shop_output_quantity;
        }
      });

      const filteredResults = Object.entries(results)
        .filter(([_, quantity]) => quantity !== 0)
        .map(([name, quantity]) => ({ name, quantity }));
      console.log(filteredResults);
      setSummary(filteredResults);
      return filteredResults;

      // setVehicleError("");
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after request completes
    }
  };

  useEffect(() => {}, []); // Update summary whenever products change

  return (
    <section className="contact-section pb-5">
       <Link to="/houseadmin"><div className="flex ml-5"> <p>Back</p><AiFillBackward size={40} /></div></Link>
      <div className="auto-container">
        <div className="contact-title">
          <h2>Stock Status</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: "20px" }} htmlFor="startDate">
            Item Code
          </label>
          <input
            style={{ marginRight: "50px", fontSize: "20px" }}
            type="number"
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
            {isLoading ? "is Loading" : "Search"}
          </button>

          {summary.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Item_Code</th>
                  <th>Quantity </th>
                </tr>
              </thead>

              <tbody>
                {summary.map((product) => (
                  <tr key={product.store_input_name}>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
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
  );
}

export default ProductSummary;
