import React from "react";
import { IoClose } from "react-icons/io5";
const DisplayImage = ({ imgUrl, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center "
    >
      <div className="bg-white shadow-lg rounded max-w-2xl mx-auto p-4">

        <div
                    className="w-fit ml-auto text-lg hover:text-red-600 cursor-pointer "
                    onClick={onClose}
                  >
                    <IoClose />
                  </div>
        <div className="flex justify-center p-4 max-h-[80vh] max-w-[80vh]">
          <img alt='img' src={imgUrl} className= "h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default DisplayImage;
