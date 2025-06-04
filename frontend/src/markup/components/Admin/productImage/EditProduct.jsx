import React, { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import productCategory from "../../../helper/ProductCategory";
import DisplayImage from "./DisplayImage";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useAuth } from "../../../../Context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../../axiosConfig";

const AdminEditProduct = ({ onClose }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [image_name, setImage_name] = useState("");
  const [image_price, setImage_Price] = useState("");
  const [image_url, setImage_url] = useState([]);
  const [image_urls, setImage_urls] = useState([]);
  const [category_id, setCategory_id] = useState("");
  const [image_description, setImage_decription] = useState("");
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const [openFullscreenImage, setOpenFullscreenImage] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState("");
  const { employee } = useAuth();
  const loggedInEmployeeToken = employee?.employee_token || "";

  const productNameDom = useRef();
  const categoryDom = useRef();
  const productquantityDom = useRef();
  const prodescriptionDom = useRef();
  const designerNameDom = useRef();

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/image/single/${id}`, {
          headers: { "x-access-token": loggedInEmployeeToken },
        });

        setCategory_id(data.singleShopInput[0].category_id);
        setImage_name(data.singleShopInput[0].image_name);
        setImage_Price(data.singleShopInput[0].image_price);
        setImage_url(data.singleShopInput[0].image_url);
        setImage_decription(data.singleShopInput[0].image_description);
      } catch (error) {
        setApiError(true);
        setApiErrorMessage("Error fetching product data");
      }
    };

    fetchData();
  }, [id, loggedInEmployeeToken]);
  // Handle image file selection
    function designerNameTracker(e) {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImage_url((prev) => [...prev, ...newImages]);
    setImage_urls((prev) => [...prev,...newImages]);
  }

  // Handle image file selection


  // Delete selected image
  function handleDeleteProductImage(index) {
    setImage_urls((prev) => prev.filter((_, i) => i !== index));
  }
  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image_name", image_name);
    formData.append("image_price", image_price);
    formData.append("image_description", image_description);
    formData.append("category_id", category_id);
    formData.append("id", id);

      image_url.forEach((image, index) => {
      const file = designerNameDom.current.files[index];
      if (file) {
        formData.append("image", file);
      }
    });
  // Check if image_url is indeed an array
  
  try {
    const response = await axios.put("/api/updateImage", formData, {
      headers: { "x-access-token": loggedInEmployeeToken },
    
    })
    navigate("/houseadmin/houseAploadImage");
    console.log("response", response);
      if(response.status === 200){ 
        console.log("Product updated successfully:", response);
        setApiErrorMessage(response.data.status)
        toast.success(response.status);
        setImage_name("");
        setImage_Price("");
        setImage_urls([]);
        setCategory_id("");
        setImage_decription("");
        onClose(); // Close the form
        
      }
    // Handle response...
  } catch (error) {
    // Handle error...
  }
}


  return (
    <div className=" relative h-full w-full bg-opacity-35 bottom-0 right-0 left-8 top-14 flex justify-center items-center overflow-hidden">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Edit Product</h2>
          <h2 className="font-bold text-lg">Edit Product</h2>
        <div
          className="w-fit ml-auto text-lg hover:text-red-600 cursor-pointer "
          onClick={onClose}
        >
          <IoClose />
        </div>
        </div>
        
        <form className="grid p-4 gap-2 overflow-y-scroll h-full pb-5" onSubmit={handleSubmit}>
          <label htmlFor="productName">Edit Product</label>
          <input
            type="text"
            id="productName"
            className="bg-slate-100 p-2 border rounded"
            placeholder="Enter Product Name"
            ref={productNameDom}
            required
            onChange={(e) => setImage_name(e.target.value)}
            value={image_name}
          />

          <label htmlFor="brandName" className="mt-3">Brand Name:</label>
          <input
            type="text"
            id="brandName"
            className="bg-slate-100 p-2 border rounded"
            placeholder="Enter Price"
            value={image_price}
            onChange={(e) => setImage_Price(e.target.value)}
            ref={productquantityDom}
            required
          />

          <label htmlFor="category" className="mt-3">Category:</label>
          <select
            required
            value={category_id}
            ref={categoryDom}
            className="bg-slate-100 p-2 border rounded"
            onChange={(e) => setCategory_id(e.target.value)}
          >
            <option value="">Select Category</option>
            {productCategory.map((el, index) => (
              <option key={el.value + index} value={el.value}>
                {el.label}
              </option>
            ))}
          </select>

          <label htmlFor="productImage" className="mt-3">Product Images:</label>
          <label htmlFor="UploadproductImage">
            <div className="bg-slate-100 p-2 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                <span className="text-4xl"><FaCloudUploadAlt /></span>
                <p className="text-sm">Upload Product Images</p>
                <input
                  type="file"
                  id="UploadproductImage"
                  className="hidden"
                  multiple
                  onChange={designerNameTracker}
                  ref={designerNameDom}
                />
              </div>
            </div>
          </label>

          <div>
            {image_urls.length > 0 ? (
              <div className="flex gap-2 items-center flex-wrap">
                {image_urls.map((el, index) => (
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

          <label htmlFor="productDescription" className="mt-3">Product Description:</label>
          <textarea
            className="bg-slate-100 p-2 border rounded h-15"
            placeholder="Enter Product Description"
            ref={prodescriptionDom}
            required
            onChange={(e) => setImage_decription(e.target.value)}
            value={image_description}
          ></textarea>

          <button
            type="submit"
            className="must px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition-all mb-5 "
          >
            Edit Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminEditProduct;