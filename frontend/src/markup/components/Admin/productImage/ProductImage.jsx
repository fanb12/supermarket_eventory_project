import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useAuth } from "../../../../Context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../../axiosConfig";
import DisplayImage from "./DisplayImage";
import productCategory from "../../../helper/ProductCategory";

const UploadProduct = ({ onClose, fetchproduct }) => {
  const navigate = useNavigate();
  const { shop_input_id } = useParams();
  const [image_name, setImage_name] = useState("");
  const [image_price, setImage_Price] = useState("");
  const [image_url, setImage_url] = useState([]); // Array to store multiple images
  const [category_id, setCategory_id] = useState("");
  const [image_description, setImage_decription] = useState("");
  const [serverMsg, setServerMsg] = useState("");
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const [openFullscreenImage, setOpenFullscreenImage] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState("");
  const reloadPage = () => {
    window.location.reload();
  };
  const productNameDom = useRef();
  const categoryDom = useRef();
  const productquantityDom = useRef();
  const prodescriptionDom = useRef();
  const designerNameDom = useRef();

  const { employee } = useAuth();
  const loggedInEmployeeToken = employee?.employee_token || "";

  function productNameTracker() {
    setImage_name(productNameDom.current.value);
  }

  function categoryTracker() {
    setCategory_id(categoryDom.current.value);
  }

  function qantityTracker() {
    setImage_Price(productquantityDom.current.value);
  }

  function prodescrptionTracker() {
    setImage_decription(prodescriptionDom.current.value);
  }

  function designerNameTracker(e) {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImage_url((prev) => [...prev, ...newImages]);
  }

  function handleDeleteProductImage(index) {
    setImage_url((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e) {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("image_name", image_name);
    formData.append("image_price", image_price);
    formData.append("image_description", image_description);
    formData.append("category_id", category_id);
  
    // Append all images to the formData
    image_url.forEach((image, index) => {
      const file = designerNameDom.current.files[index];
      if (file) {
        formData.append("image", file);
      }
    });
  
    const headers = {
      "x-access-token": loggedInEmployeeToken,
    };
  
    try {
      const response = await axios.post("/api/uploadImage", formData, { headers });
      if (response.data.status=== "Image added successfully") {
        setServerMsg("Product added successfully");
        toast.success(response.data.status);
        setImage_name("");
        setImage_Price("");
        setImage_url([]);
        setCategory_id("");
        setImage_decription("");
  
        onClose(); // Close the form
        reloadPage(); // Reload the window
      }
      console.log("Product uploaded successfully:", response);
    } catch (error) {
      console.log("Error uploading product:", error.response ? error.response.data : error);
      setApiError(true);
      setApiErrorMessage(error.response ? error.response.data.error : "An unknown error occurred.");
    }
  }

  return (
    <div className="fixed h-full w-full bg-opacity-35 bottom-0 right-0 left-8 top-14 flex justify-center items-center overflow-hidden">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Upload Product</h2>
          <div
            className="w-fit ml-auto text-lg hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <IoClose />
          </div>
        </div>
        <form className="grid p-4 gap-2 overflow-y-scroll h-full pb-5" onSubmit={handleSubmit}>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="bg-slate-100 p-2 border rounded"
            placeholder="Enter Product Name"
            ref={productNameDom}
            required
            onChange={productNameTracker}
            value={image_name}
          />

          <label htmlFor="brandName" className="mt-3">
            Brand Name:
          </label>
          <input
            type="text"
            name="brandName"
            placeholder="Enter Price"
            id="brandName"
            className="bg-slate-100 p-2 border rounded"
            value={image_price}
            onChange={qantityTracker}
            ref={productquantityDom}
            required
          />

          <label htmlFor="category" className="mt-3">
            Category:
          </label>
          <select
            required
            value={category_id}
            ref={categoryDom}
            className="bg-slate-100 p-2 border rounded"
            onChange={categoryTracker}
            name="category"
            id="category"
          >
            <option value={""}>Select Category</option>
            {productCategory.map((el, index) => (
              <option key={el.value + index} value={el.value}>
                {el.label}
              </option>
            ))}
          </select>

          <label htmlFor="productImage" className="mt-3">
            Product Images:
          </label>
          <label htmlFor="UploadproductImage">
            <div className="bg-slate-100 p-2 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                <span className="text-4xl">
                  <FaCloudUploadAlt />
                </span>
                <p className="text-sm">Upload Product Images</p>
                <input
                  type="file"
                  id="UploadproductImage"
                  className="hidden"
                  name="productImage"
                  multiple
                  onChange={designerNameTracker}
                  ref={designerNameDom}
                />
              </div>
            </div>
          </label>

          <div>
            {image_url.length > 0 ? (
              <div className="flex gap-2 items-center flex-wrap">
                {image_url.map((el, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={el}
                      alt={`Preview ${index}`}
                      height={80}
                      width={80}
                      className="bg-slate-100 border cursor-pointer"
                      onClick={() => {
                        setOpenFullscreenImage(true);
                        setFullscreenImage(el);
                      }}
                    />
                    <div
                      className="absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer"
                      onClick={() => handleDeleteProductImage(index)}
                    >
                      <MdDelete />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-red-600 text-xs">*Please Upload Product Images</p>
            )}
          </div>

          {openFullscreenImage && (
            <DisplayImage onClose={() => setOpenFullscreenImage(false)} imgUrl={fullscreenImage} />
          )}

          <label htmlFor="productDescription" className="mt-3">
            Product Description:
          </label>
          <textarea className="bg-slate-100 p-2 border rounded h-32"
            placeholder="Enter Product Description"
            name="productDescription"
            id="productDescription"
       
            ref={prodescriptionDom}
            required
            onChange={prodescrptionTracker}
            value={image_description}
          ></textarea>
        
            <button
              type="submit"
              className="must px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition-all"
            >
              Upload Product
            </button>
          
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
