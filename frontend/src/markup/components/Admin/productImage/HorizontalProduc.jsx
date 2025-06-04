import React, { useEffect, useRef, useState } from "react";

import displayCurrency from "../../../helper/DisplayCurrency";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import axios  from "../../../../axiosConfig";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";

const HorizontalCartProduct = ({products, category, heading }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);
  const [scroll, setScroll] = useState(0);
 
  // create a variable to hold the users token
 

  const scrollElement = useRef();
//   useEffect(() => {
// const fetchAllProduct = async () => {
//   setLoading(true);
   
//       const data = await axios.get("/api/images",category);
//  setLoading(false);
//       const dataResponse = data.data.product;
//       console.log(data.data);
// console.log("tossss",dataResponse);
//      setAllProduct(dataResponse);  
//   };

  
//     fetchAllProduct();
//   }, []);
  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };
  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };
  return (
    <div className="container mx-auto px-4 my-6 relative">
      <h2 className="text-2xl font-semibold py-4"> {heading}</h2>
      <div
        className="flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all"
        ref={scrollElement}
      >
        <button
          className="bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block"
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>
        {/* {
        loading ?(loadingList.map((product, index) => {
          return (
            <div className="w-full min-w-[280px] md:min-w-[320] max-w-[280px] md:max-w-[320] h-36 bg-white rounded-sm shadow flex">
              <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse">
                {/* <img
                  src={product.productImage[0]}
                  alt="category"
                  className="object-scale-down h-full hover:scale-110 transition-all "
                /> */}
              {/* </div>
              <div className="p-4 grid w-full gap-2">
                <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full">
                </h2>
                <p className="capitalize text-slate-500 bg-slate-200 p-1 rounded-full animate-pulse "></p>
                <div className=" gap-3 w-full">
                  <p className="text-red-600 font-medium p-1 bg-slate-200  rounded-full animate-pulse mt-2 py-2">
                   
                  </p>
                  <p className="text-slate-500 line-through p-1 bg-slate-200  rounded-full animate-pulse mt-2 py-2">
                  
                  </p>
                </div>
                <button className="text-sm text-white px-3 py-0.5 rounded-full w-full bg-slate-200  animate-pulse">
                
                </button>
              </div>
            </div>
          );
        })): */} 
        {
        ( products?.map((product, index) => {
          return (
            <div className="w-full min-w-[280px] md:min-w-[320] max-w-[280px] md:max-w-[320] h-36 bg-white rounded-sm shadow flex">
              <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] ">
                <img
                  src={product.image_url}
                  alt="category"
                  className="object-scale-down h-full hover:scale-110 transition-all "
                />
              </div>
              <div className="p-3 grid">
                <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                  {product?.image_name}
                </h2>
                <p className="capitalize text-slate-500">{product?.category}</p>
                <div className=" gap-1 text-xs">
                  <p className="text-red-600 ">
                    {displayCurrency(product?.image_price)}
                  </p>{" "}
                  {/* <p className="text-slate-500 line-through">
                    {displayCurrency(product?.price)}
                  </p> */}
                </div>
               
              </div>
            </div>
          );
        }))}
      </div>
    </div>
  );
};

export default HorizontalCartProduct;
