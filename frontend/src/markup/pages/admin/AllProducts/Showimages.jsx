import React, { useEffect, useState } from "react";
import UploadProduct from "../../../components/Admin/productImage/ProductImage";
// SummaryApi from "../common";
import AdminProductCard from "../../../components/Admin/productImage/ProductCard";
import axios  from "../../../../axiosConfig";
import { useAuth } from "../../../../Context/AuthContext";
import { AiFillBackward } from "react-icons/ai";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  
  // create a variable to hold the users token
  let loggedInEmployeeToken = "";
  // destructure the auth hook and get the token
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }
  const fetchAllProduct = async () => {
    const headers = {
        "x-access-token": loggedInEmployeeToken,
      };
      const data = await axios.get("/api/images", { headers });
      const dataResponse = data.data.product;
console.log("tossss",dataResponse);
     setAllProduct(dataResponse);  
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);
  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
    
      </div>
     {/* allproduct   */}
       <div className="flex gap-5 flex-wrap items-center py-4 h-[calc(100vh-190px)] overflow-y-scroll">
        {allProduct.map((product,index) => {
          return (
            <AdminProductCard data={product} key={index+"allProduct"} fetchproduct={fetchAllProduct}/>
         
          );
        })}
      </div>

      {/*upload product  */}
      {openUploadProduct && (
        <UploadProduct onClose={() => setOpenUploadProduct(false)} fetchproduct={fetchAllProduct} />
      )}
    </div>
  );
};

export default AllProducts;
