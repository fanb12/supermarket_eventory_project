import React, { useEffect, useRef, useState } from "react";

import displayCurrency from "../../../helper/DisplayCurrency";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import axios  from "../../../../axiosConfig";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";

const VerticalCartProduct = ({products, category, heading }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);
  const [scroll, setScroll] = useState(0);
 
  // create a variable to hold the users token

   

  const scrollElement = useRef();

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
        className="flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all"
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
        loading ?  (loadingList.map((product, index) => {
          return (
            <div className="w-full min-w-[280px] md:min-w-[320] max-w-[280px] md:max-w-[320] bg-white rounded-sm shadow ">
              <div className="bg-slate-200 h-48 p-4 min-w-[120px] md:min-w-[145px] flex justify-center items-center animate-pulse">
               
              </div>
              <div className="p-4 grid gap-3">
                <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black animate-pulse bg-slate-200 p-1 rounded-full py-2">
           
                </h2>
                <p className="capitalize text-slate-500 animate-pulse bg-slate-200 p-1 rounded-full py-2"></p>
                <div className="flex gap-2 text-xs">
                  <p className="text-red-600 font-medium animate-pulse bg-slate-200 p-1 rounded-full w-full py-2">
                   
                  </p>{" "}
                  <p className="text-slate-500 line-through animate-pulse bg-slate-200 p-1 rounded-full w-full py-2">
                 
                  </p>
                </div>
                <button className="text-sm text-white px-3 py-2 animate-pulse bg-slate-200 rounded-full">
                 
                </button>
              </div>
            </div>
          );
        })) : */}
        {( products.map((product, index) => {
          return (
            <Link to={"product/"+product?.id} className="w-full min-w-[280px] md:min-w-[320] max-w-[280px] md:max-w-[320] bg-white rounded-sm shadow ">
              <div className="bg-slate-200 h-48 p-4 min-w-[120px] md:min-w-[145px] flex justify-center items-center">
                <img
                  src={product.image_url}
                  alt="category"
                  className="object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply"
                />
              </div>
              <div className="p-4 grid gap-3">
                <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                  {product?.productName}
                </h2>
                <p className="capitalize text-slate-500">{product?.category}</p>
                <div className="flex gap-2 text-xs">
                  <p className="text-red-600 font-medium">
                    {displayCurrency(product?.image_price)}
                  </p>{" "}
                  {/* <p className="text-slate-500 line-through">
                    {displayCurrency(product?.price)}
                  </p> */}
                </div>
                {/* <button className="text-sm bg-red-500 hover:bg-red-700 text-white px-3 py-0.5 rounded-full" onClick={(e)=>handleAddToCart(e,product?.id)}>
                  Add to Cart
                </button> */}
              </div>
            </Link>
          );
        }))
       }
      </div>
    </div>
  );
};



export default VerticalCartProduct