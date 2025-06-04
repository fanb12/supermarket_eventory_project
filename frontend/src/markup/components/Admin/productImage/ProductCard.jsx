import React ,{useState}from "react";
import { MdModeEdit } from "react-icons/md";
import AdminEditProduct from "./EditProduct";
import displayCurrency from "../../../helper/DisplayCurrency";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminProductCard = ({ data, fetchproduct }) => {
  const navigate = useNavigate();
  const [editProduct, setEditProduct] =useState(false);
  console.log("data",data)
  const handleEdit = (id) => {
    navigate(`/houseadmin/houseproduct-update/${id}`)
    
  };
  
  return (
    <div className="bg-white p-4 rounded ">
      <div className="w-36">
        <div className="h-32 w-32 flex justify-center items-center"> <img alt="imag"
          src={data?.image_url}
          height={120}
          width={120}
          className=" mx-auto object-fill h-full"
        /></div>
       
        <h1 className="text-ellipsis line-clamp-2"> {data?.category}</h1>
    
        <div>
          <div>
            <p className="font-semibold">
            {displayCurrency(data?.image_price

            )}</p></div>
          <div>
            <MdModeEdit
              className="w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full text-2xl hover:text-white cursor-pointer"
               onClick={() => handleEdit(data.id)}
            />
          </div>
        </div>
      </div>
      {editProduct && (
        <AdminEditProduct
          initialData={data}
          onClose={() => setEditProduct(false)}
          fetchproduct={fetchproduct}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
