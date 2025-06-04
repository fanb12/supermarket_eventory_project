import React from "react";
import Banner from "../../components/StatePages/BottomBanner/BottomBanner";
import AboutUs from "../../components/StatePages/About/AboutUs";
import Service from "../../components/StatePages/Service/PhotoGallery";
import Features from "../../components/StatePages/Features/Features";
import Service2 from "../../components/StatePages/Service/Service2";
import AboutUs2 from "../../components/StatePages/About/AboutUs2";
import AboutUs3 from "../../components/StatePages/About/AboutUs3";
import HorizontalCartProduct from "../../components/Admin/productImage/HorizontalProduc";
import VerticalCartProduct from "../../components/Admin/productImage/VerticalProduct";
import { useEffect } from "react";
import axios from "../../../axiosConfig";
function Home(props) {
const [allProduct, setAllProduct] = React.useState([]);

const fetchAllProduct = async () => {
  const data = await axios.get("/api/images");
  const dataResponse = data.data.product;
  // If dataResponse is an object, convert it to an array of values
  const filtered = Object.values(dataResponse).filter(
    (item) => item.category === "Snacks"
  );
  console.log("Filtered products:", filtered);
  setAllProduct(dataResponse);
};

  useEffect(() => {
    fetchAllProduct();
  }, []);



  return (
    <div>
      <Banner />

      <HorizontalCartProduct
        category={"Snacks"}
        heading={"Top's Snacks"}
        products={allProduct.filter((item) => item.category === "Snacks")}
      />
      <HorizontalCartProduct
        category={"Produce"}
        heading={"Top's Produce"}
        products={allProduct.filter((item) => item.category === "Produce")}
      />
      <VerticalCartProduct
        category={"Pet Care"}
        heading={"Top's Pet Care"}
        products={allProduct.filter((item) => item.category === "Pet Care")}
      />
      <VerticalCartProduct
        category={"Household"}
        heading={"Top's Household"}
        products={allProduct.filter((item) => item.category === "Household")}
      />
      <VerticalCartProduct
        category={"Pantry"}
        heading={"Top's Pantry"}
        products={allProduct.filter((item) => item.category === "Pantry")}
      />
      <VerticalCartProduct
        category={"Meat & Seafood"}
        heading={"Top's Meat & Seafood"}
        products={allProduct.filter((item) => item.category === "Meat & Seafood")}
      />
      <VerticalCartProduct
        category={"Health & Beauty"}
        heading={"Top's Health & Beauty"}
        products={allProduct.filter((item) => item.category === "Health & Beauty")}
      />
      <VerticalCartProduct
        category={"Frozen Foods"}
        heading={"Top's Frozen Foods"}
        products={allProduct.filter((item) => item.category === "Frozen Foods")}
      />
      <VerticalCartProduct
        category={"Dairy & Refrigerated"}
        heading={"Top's Dairy & Refrigerated"}
        products={allProduct.filter((item) => item.category === "Dairy & Refrigerated")}
      />
      <VerticalCartProduct
        category={"Beverages"}
        heading={"Top's Beverages"}
        products={allProduct.filter((item) => item.category === "Beverages")}
      />
      <VerticalCartProduct
        category={"Bakery"}
        heading={"Top's Bakery"}
        products={allProduct.filter((item) => item.category === "Bakery")}
      />
    </div>
  );
}

export default Home;
